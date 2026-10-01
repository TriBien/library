/* ============================================================
   GDrive — Google sign-in + Drive appDataFolder access
   - Google Identity Services is fetched on demand, the first time
     the reader signs in (the only external script in the project)
   - implicit grant: the browser gets an access token straight back,
     so no client secret and no backend is needed
   - the token lives one hour. It is never refreshed silently: an
     hour later the reader signs in again, which is exactly what
     Google asks for when an app only ever uses access tokens
   Exposes window.GDrive
   ============================================================ */
(function () {
  'use strict';

  var GIS_SRC = 'https://accounts.google.com/gsi/client';
  var DRIVE_API = 'https://www.googleapis.com/drive/v3';
  var DRIVE_UPLOAD = 'https://www.googleapis.com/upload/drive/v3';
  var USERINFO = 'https://www.googleapis.com/oauth2/v3/userinfo';

  /* openid/email/profile name the reader, drive.appdata is the private
     per-user folder Drive keeps out of the file picker */
  var SCOPES = [
    'openid',
    'email',
    'profile',
    'https://www.googleapis.com/auth/drive.appdata'
  ].join(' ');

  var gisLoading = null;

  /* ---------------- helpers ---------------- */

  function fail(message, code, status) {
    var err = new Error(message);
    err.code = code || 'error';
    err.status = status || 0;
    return err;
  }

  function oauth2() {
    return window.google && window.google.accounts && window.google.accounts.oauth2;
  }

  /* Google refuses to open a popup that is not triggered by a tap, so the
     script has to be in the page before the sign-in button is pressed —
     warmup() is called as soon as the account screen opens. */
  function warmup() {
    return loadGis().catch(function () {
      /* the real attempt reports the failure with context */
    });
  }

  function loadGis() {
    var api = oauth2();
    if (api) return Promise.resolve(api);
    if (gisLoading) return gisLoading;

    gisLoading = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = GIS_SRC;
      script.async = true;
      script.onload = function () {
        if (oauth2()) resolve(oauth2());
        else {
          gisLoading = null;
          reject(fail('Google sign-in did not start.', 'no_gis'));
        }
      };
      script.onerror = function () {
        gisLoading = null;
        reject(fail('Could not reach accounts.google.com.', 'offline'));
      };
      document.head.appendChild(script);
    });
    return gisLoading;
  }

  function describe(response) {
    var code = (response && response.error) || response.type || 'error';
    var known = {
      popup_closed: 'The Google sign-in window was closed.',
      popup_failed_to_open: 'The browser blocked the Google sign-in window.',
      access_denied: 'Permission was not granted.',
      consent_required: 'Permission was withdrawn — sign in again.',
      interaction_required: 'Sign in again to continue.',
      network_error: 'Network error while talking to Google.'
    };
    if (known[code]) return known[code];
    return (response && response.error_description) || 'Google sign-in failed (' + code + ').';
  }

  /* ---------------- sign in / out ---------------- */

  /* options.clientId  OAuth client id of the Web application client
     options.quiet     skip the account chooser (consent already given) */
  function signIn(options) {
    var opts = options || {};
    if (!opts.clientId) return Promise.reject(fail('No Google client id is configured.', 'no_config'));

    return loadGis().then(function (api) {
      return new Promise(function (resolve, reject) {
        var config = {
          client_id: opts.clientId,
          scope: SCOPES,
          ux_mode: 'popup',
          callback: function (response) {
            if (!response || !response.access_token) {
              reject(fail(describe(response), (response && response.error) || 'error'));
              return;
            }
            resolve({
              accessToken: response.access_token,
              expiresAt: Date.now() + (response.expires_in || 3600) * 1000 - 30000,
              scopes: String(response.scope || '').split(' ')
            });
          },
          error_callback: function (err) {
            reject(fail(describe(err), (err && err.type) || 'error'));
          }
        };
        if (opts.quiet) config.prompt = '';

        var client = api.initTokenClient(config);
        client.requestAccessToken();
      });
    });
  }

  function revoke(accessToken) {
    return loadGis()
      .then(function (api) {
        return new Promise(function (resolve) {
          api.revoke(accessToken, resolve);
          setTimeout(resolve, 3000);
        });
      })
      .catch(function () {
        /* revoking is a courtesy, signing out locally is what matters */
      });
  }

  /* who am i — only used for the greeting, never for authorisation */
  function profile(accessToken) {
    return request(USERINFO, accessToken, { parse: 'json' }).then(function (data) {
      return {
        name: data.name || data.email || 'Google account',
        email: data.email || '',
        picture: data.picture || ''
      };
    });
  }

  /* ---------------- drive rest api ---------------- */

  function apiError(res, text) {
    if (res.status === 401) return fail('Your Google session has expired — sign in again.', 'expired', 401);

    var data = null;
    try {
      data = JSON.parse(text);
    } catch (err) {
      /* not json, fall back to the raw body */
    }
    var info = (data && data.error) || {};
    var first = (info.errors && info.errors[0]) || {};
    var reason = first.reason || info.status || '';
    var detail = info.message || first.message || '';
    var tail = (detail || String(text || '').slice(0, 200)).replace(/\s+/g, ' ').replace(/\.\s*$/, '');

    if (res.status === 403) {
      // the most common first-run problem: the API was never switched on
      if (
        reason === 'accessNotConfigured' ||
        reason === 'SERVICE_DISABLED' ||
        /has not been used in project|api is disabled/i.test(tail)
      ) {
        return fail(
          'The Google Drive API is not enabled for this project — enable it in the Cloud Console (APIs & Services → Library), then try again.',
          'denied',
          403
        );
      }
      if (reason === 'insufficientPermissions' || reason === 'insufficientScopes' || /insufficient/i.test(tail)) {
        return fail(
          'Drive access was not granted — sign out and sign in again, allowing access to Drive.',
          'denied',
          403
        );
      }
      return fail(
        'Drive refused the request (403' + (reason ? ' ' + reason : '') + ')' + (tail ? ': ' + tail : '') + '.',
        'denied',
        403
      );
    }

    return fail(
      'Drive answered HTTP ' + res.status + (reason ? ' (' + reason + ')' : '') + (tail ? ': ' + tail : '') + '.',
      'api',
      res.status
    );
  }

  function request(url, accessToken, options) {
    var opts = options || {};
    var headers = { Authorization: 'Bearer ' + accessToken };
    var key;

    for (key in opts.headers) {
      if (Object.prototype.hasOwnProperty.call(opts.headers, key)) headers[key] = opts.headers[key];
    }

    return fetch(url, {
      method: opts.method || 'GET',
      headers: headers,
      body: opts.body,
      cache: 'no-store'
    }).then(function (res) {
      return res.text().then(function (text) {
        if (!res.ok) throw apiError(res, text);
        if (opts.parse === 'json') {
          try {
            return JSON.parse(text);
          } catch (err) {
            throw fail('Drive sent an unreadable answer.', 'bad_json', res.status);
          }
        }
        return text;
      });
    }, function () {
      throw fail('Could not reach Google Drive — check your connection.', 'offline');
    });
  }

  /* the hidden folder holds nothing but our own file, so a short list
     is enough to find it again on any device */
  function findFile(accessToken, name) {
    var url = DRIVE_API + '/files?spaces=appDataFolder&pageSize=100&fields=' +
      encodeURIComponent('files(id,name,modifiedTime,size)');
    return request(url, accessToken, { parse: 'json' }).then(function (data) {
      var files = (data && data.files) || [];
      for (var i = 0; i < files.length; i++) {
        if (files[i].name === name) return files[i];
      }
      return null;
    });
  }

  function readFile(accessToken, fileId) {
    return request(DRIVE_API + '/files/' + encodeURIComponent(fileId) + '?alt=media', accessToken);
  }

  function createFile(accessToken, name, text) {
    var boundary = 'library' + Date.now().toString(36);
    var meta = JSON.stringify({ name: name, parents: ['appDataFolder'] });
    var body = [
      '--' + boundary,
      'Content-Type: application/json; charset=UTF-8',
      '',
      meta,
      '--' + boundary,
      'Content-Type: application/json',
      '',
      text,
      '--' + boundary + '--',
      ''
    ].join('\r\n');

    return request(
      DRIVE_UPLOAD + '/files?uploadType=multipart&fields=' + encodeURIComponent('id,name,modifiedTime'),
      accessToken,
      {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/related; boundary=' + boundary },
        body: body,
        parse: 'json'
      }
    );
  }

  function updateFile(accessToken, fileId, text) {
    return request(
      DRIVE_UPLOAD + '/files/' + encodeURIComponent(fileId) +
        '?uploadType=media&fields=' + encodeURIComponent('id,modifiedTime'),
      accessToken,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: text,
        parse: 'json'
      }
    );
  }

  window.GDrive = {
    scopes: SCOPES,
    warmup: warmup,
    signIn: signIn,
    revoke: revoke,
    profile: profile,
    findFile: findFile,
    readFile: readFile,
    createFile: createFile,
    updateFile: updateFile
  };
})();