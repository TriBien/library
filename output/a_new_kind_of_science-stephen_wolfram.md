TL;DR: A New Kind of Science (2002) của Stephen Wolfram là một công trình tham vọng nhằm thay đổi cách con người hiểu về tự nhiên: thay vì cho rằng thế giới phải được giải thích bằng những phương trình toán học phức tạp, Wolfram đề xuất rằng các quy tắc tính toán cực kỳ đơn giản có thể tạo ra những hành vi phức tạp, thậm chí những hiện tượng giống với thế giới thực. Điểm mạnh của sách là mở rộng tư duy về tính toán, mô phỏng và sự xuất hiện của trật tự từ những quy tắc đơn giản. Điểm yếu là tham vọng khoa học vượt xa mức độ bằng chứng mà tác phẩm đưa ra, đặc biệt trong tuyên bố rằng một phương pháp mới có thể trở thành nền tảng thống nhất để nghiên cứu tự nhiên.

Giá trị lớn nhất của cuốn sách không nhất thiết nằm ở việc Wolfram đã chứng minh được một cuộc cách mạng khoa học hoàn chỉnh, mà ở câu hỏi ông đặt ra: Liệu những hệ thống phức tạp mà chúng ta quan sát được có thể bắt nguồn từ các quy tắc đơn giản hơn nhiều so với những gì trực giác thông thường khiến chúng ta tin tưởng?

# I. Tổng quan về tác phẩm

## A New Kind of Science

Stephen Wolfram · 2002

Đây là một công trình liên ngành kết hợp khoa học máy tính, toán học, vật lý, lý thuyết hệ thống và triết học khoa học. Cuốn sách dài hơn 1.000 trang, sử dụng rất nhiều hình minh họa và thí nghiệm tính toán để khảo sát cách những quy tắc đơn giản sinh ra các mẫu hình phức tạp.

Tác phẩm được xây dựng quanh ba ý tưởng chủ đạo:

- Tính toán phổ quát: những quy tắc đơn giản có thể thực hiện các phép tính phức tạp đến mức tương đương với một máy tính phổ quát.
- Sự xuất hiện của độ phức tạp: một hệ thống không cần có bộ điều khiển phức tạp để tạo ra hành vi phức tạp.
- Tự nhiên như một quá trình tính toán: những gì ta quan sát được có thể được mô hình hóa như kết quả của các quy tắc vận hành từng bước.

Wolfram không chỉ muốn cung cấp một tập hợp mô hình mới. Ông còn muốn thay đổi phương pháp làm khoa học: thay vì chỉ tìm phương trình giải thích tự nhiên, hãy khảo sát trực tiếp những chương trình có thể tạo ra các hiện tượng tương tự.

Đó là một chương trình nghiên cứu đáng chú ý, nhưng cần phân biệt rõ giữa một phương pháp khám phá hữu ích và một lý thuyết đã được xác nhận là giải thích đúng thế giới.

# II. Giải thích từ nguyên lý đầu tiên: Wolfram thực sự muốn chứng minh điều gì?

## 1. Cellular automata — quy tắc đơn giản, hành vi phức tạp

Khái niệm trung tâm của cuốn sách là cellular automaton (CA), thường dịch là ô-tô-mát tế bào.

Hãy tưởng tượng một hàng ô vuông. Mỗi ô có thể ở trạng thái đen hoặc trắng. Trạng thái của ô ở bước tiếp theo được quyết định bởi trạng thái hiện tại của chính nó và các ô lân cận, theo một quy tắc cố định.

### Ví dụ trực quan: Rule 90

Mỗi ô ở bước kế tiếp bằng phép XOR của hai ô ngay bên cạnh nó ở bước hiện tại.

Minh họa sơ đồ các ô theo thời gian; hình tam giác gợi ý là mẫu thường gặp ở Rule 90.

Ý tưởng quan trọng: chỉ cần một quy tắc cục bộ rất ngắn, lặp lại nhiều lần, ta có thể tạo ra một cấu trúc có hình thái phong phú.

Điều này dẫn đến một câu hỏi nền tảng: nếu một quy tắc rất đơn giản có thể tạo ra một cấu trúc phức tạp, liệu có nhất thiết phải giả định rằng cơ chế tạo ra cấu trúc đó cũng phức tạp hay không?

Wolfram cho rằng không nhất thiết.

Cần phân biệt ba khái niệm:

- Quy tắc đơn giản: chương trình tạo ra trạng thái tiếp theo có thể rất ngắn.
- Kết quả phức tạp: chuỗi trạng thái sau nhiều bước có thể có cấu trúc khó nhận biết hoặc dự đoán.
- Khả năng dự đoán: biết quy tắc không đồng nghĩa với việc có thể dự đoán nhanh kết quả sau hàng triệu bước.

Điểm thứ ba đặc biệt quan trọng. Một chương trình có thể được mô tả rất ngắn nhưng vẫn cần thực hiện hàng triệu phép tính để biết chính xác trạng thái cuối cùng.

Đây là một trong những đóng góp tư duy có giá trị nhất của cuốn sách: độ dài của lời giải thích không nhất thiết tương ứng với độ khó của hành vi được giải thích.

## 2. Bốn lớp hành vi của các hệ thống tính toán

Wolfram khảo sát rất nhiều ô-tô-mát tế bào và phân loại hành vi của chúng thành bốn lớp. Đây là một khung phân loại có tính trực giác mạnh, dù không phải định luật phổ quát cho mọi hệ thống phức tạp.

[Four Classes of Behavior: A New Kind of Science | Online by Stephen Wolfram \[Page 232\]](https://images.openai.com/static-rsc-4/_wpaLOGdO10qPTEzWSxdJSGX2h5zyHIB254GmWRsAz70H0I9EwRsP-_czVJzkxyKrEtX72iywP0Go-OoeNTkjxBQfn2p44n7s2fbkbFlYJVeu04RcFgAdzoxXmwYxlmp4IcDpoaQNEmo5cA_Av85OSzPK-13AqTPMJlE0leU-6c?purpose=inline)

Lớp 1 — Hội tụ về trạng thái đồng nhất

Hệ thống nhanh chóng trở nên ổn định: các ô gần như đều có cùng trạng thái.

Ví dụ liên hệ: một hệ thống tự triệt tiêu khác biệt và hội tụ về cân bằng đơn giản.

[Mean-Field Analysis with Random Perturbations to Detect Gliders in Cellular Automata](https://images.openai.com/static-rsc-4/aqc7yaEoSCYfz3z91IQPVE264b25RdLM5KjmisRfmoA9sLDUg3idaP9krnwpMEt4RpPloKA8JaHJoccT5QiBFQloGr-7fzbZunGGeZnL5TJKQsKWWIb3cB78agc3s0QIIrOUMjewg_CBwgURkGuGH9vUb7OaG4vkHG-xrLz-P_0?purpose=inline)

Lớp 2 — Chu kỳ và trật tự lặp lại

Hệ thống hình thành các mẫu ổn định hoặc tuần hoàn.

Ví dụ liên hệ: dao động định kỳ, các chu kỳ trong một số mô hình sinh học hoặc cơ học.

[How Do Simple Programs Behave?: A New Kind of Science | Online by Stephen Wolfram \[Page 27\]](https://images.openai.com/static-rsc-4/KoDog9h3mfghQxzC3_pvalZQZWzB-ZJcAC_LemKymk1FgnUYDX2lGuLQPbUd0DSKCENmGAL18G2MhCG7iRWZW-3w4IGszdE73fysVRikYcFzTGXd0Tpjav1jZvtbcpZrqqBraoUMLcq8XlboSw_CaMgpyZslsPqRd5kQIHGSQo0?purpose=inline)

Lớp 3 — Hành vi hỗn loạn

Các mẫu phát triển phức tạp, khó dự đoán trực quan, dù quy tắc sinh ra chúng vẫn cố định.

Ví dụ liên hệ: những hệ thống mà sai khác nhỏ hoặc quá trình tiến hóa dài khiến dự đoán thực tế trở nên khó khăn.

[The Rule 110 Cellular Automaton: A New Kind of Science | Online by Stephen Wolfram \[Page 679\]](https://images.openai.com/static-rsc-4/-3o4SO6AT1KojK0kZYPVkg8JMNqwZdJoX3S0WQI_ERxIVSzP6CfsuhCnHkvXTxPB2lNnrZ0tF_irzBYItQLThiODpapxSW6wKNvPvA22-xy05IL_shZSyFeXXCMRr72eFqh1oUXE-iSb3g1PEecn-U0RHrK9zEMJSv2qOFKawmA?purpose=inline)

Lớp 4 — Cấu trúc phức tạp có tương tác

Các cấu trúc cục bộ xuất hiện, di chuyển, va chạm hoặc tương tác với nhau. Một số hệ thống trong lớp này có thể thực hiện tính toán phổ quát.

Ví dụ liên hệ: những hệ thống có thể vừa duy trì cấu trúc, vừa biến đổi theo cách giàu thông tin.

Lớp 4 là trọng tâm của lập luận về tính toán phổ quát. Một hệ thống đơn giản có thể tạo ra các cấu trúc đủ phong phú để thực hiện những phép tính tổng quát.

Tuy nhiên, không nên suy ra rằng mọi hệ thống phức tạp đều thuộc lớp 4, hoặc rằng bốn lớp này đã bao quát mọi loại động lực học. Đây chủ yếu là khung phân loại thực nghiệm của Wolfram đối với những hệ thống ông khảo sát.

## 3. Nguyên lý tương đương tính toán — Computational Equivalence

Đây là luận điểm tham vọng nhất của tác phẩm.

Diễn giải đơn giản, Wolfram cho rằng nhiều quá trình không hiển nhiên đơn giản hoặc không hiển nhiên phức tạp có thể đạt đến cùng một mức độ sức mạnh tính toán: chúng có thể thực hiện những phép tính phổ quát.

Điều này mở ra một giả thuyết táo bạo hơn: nếu nhiều quá trình tự nhiên đã có khả năng tính toán phổ quát, thì việc tìm ra một quy tắc ngắn hơn để mô tả chúng chưa chắc giúp ta dự đoán được kết quả nhanh hơn.

Hãy xem ba ví dụ:

- Một chương trình có vài dòng mã nhưng tạo ra một chuỗi trạng thái rất phức tạp.
- Một mô hình sinh học có quy tắc tương tác cục bộ nhưng tạo ra hành vi tập thể phong phú.
- Một hệ thống kinh tế có quy tắc tương tác tương đối đơn giản nhưng tạo ra kết quả khó dự báo vì nhiều tác nhân liên tục phản ứng với nhau.

Các ví dụ này có điểm chung về mặt trực giác, nhưng chúng không tự động chứng minh nguyên lý tương đương tính toán. Để áp dụng nguyên lý cho một hệ thống thực, cần xác định mô hình, cơ chế chuyển trạng thái và bằng chứng cho thấy tính toán phổ quát hoặc hành vi tương đương có liên quan.

Một phân biệt quan trọng:

- Tính toán phổ quát là khái niệm toán học có định nghĩa rõ ràng.
- Nguyên lý tương đương tính toán là một khái quát rộng hơn về mức độ phổ biến của những hệ thống có năng lực tính toán cao.

Phần thứ nhất có thể được chứng minh cho một hệ thống cụ thể. Phần thứ hai đòi hỏi nhiều bằng chứng và tranh luận hơn. Nhà toán học Henry Cohn đánh giá cao khía cạnh thực nghiệm của tác phẩm, nhưng cũng lưu ý rằng các ứng dụng khoa học mà Wolfram đề xuất có mức độ khả tín khác nhau.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://old.maa.org\&sz=32)

Mathematical Association of America

+1



## 4. Từ chương trình máy tính đến bản chất của tự nhiên

Wolfram không dừng ở việc nghiên cứu các mẫu hình. Ông mở rộng góc nhìn tính toán sang các vấn đề như sự sống, nhận thức, vật lý cơ bản và bản chất của thời gian.

Logic của ông có thể được tái dựng như sau:

1. Những quy tắc đơn giản có thể tạo ra các hành vi phức tạp.
2. Một số hành vi phức tạp không thể được dự đoán dễ dàng chỉ bằng cách đọc quy tắc.
3. Vì thế, mô phỏng từng bước có thể là công cụ thiết yếu để nghiên cứu một hệ thống.
4. Do đó, khoa học nên khảo sát các chương trình và quy tắc tính toán như một phương pháp nghiên cứu độc lập, bên cạnh phương trình và phân tích truyền thống.

Ba bước đầu tạo thành một lập luận có giá trị. Bước thứ tư là một đề xuất phương pháp luận đáng cân nhắc, nhưng không có nghĩa mô phỏng luôn ưu việt hơn toán học truyền thống.

Đối với vật lý cơ bản, Wolfram còn xem xét khả năng mô tả không gian, thời gian và các hiện tượng vật lý thông qua mạng lưới quan hệ và những quy tắc phát triển. Đây là phần có sức gợi mở nhưng cũng chứa nhiều suy đoán. Các nhà phê bình đã đặt câu hỏi về khả năng chuyển từ mô hình tính toán sang những dự đoán vật lý cụ thể có thể kiểm nghiệm.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://arxiv.org\&sz=32)

arXiv

+1



# III. Những đóng góp thực sự của cuốn sách

## 1. Mở rộng cách con người định nghĩa sự đơn giản

Một sai lầm trực giác phổ biến là cho rằng nguyên nhân phức tạp phải sinh ra kết quả phức tạp, còn nguyên nhân đơn giản chỉ sinh ra kết quả đơn giản.

Các ô-tô-mát tế bào cho thấy điều đó không đúng trong nhiều trường hợp.

Một quy tắc có thể dễ mô tả nhưng tạo ra một chuỗi trạng thái khó rút gọn thành công thức dự đoán ngắn hơn. Sự phân biệt này rất hữu ích trong khoa học máy tính, nghiên cứu hệ thống phức tạp và mô hình hóa.

Bài học thực tiễn: khi gặp một hệ thống khó hiểu, đừng mặc định rằng cần một lời giải thích đồ sộ. Hãy thử tìm những quy tắc cục bộ đơn giản có thể tái tạo được hành vi quan sát.

Tuy nhiên, một mô hình đơn giản chỉ có giá trị giải thích khi nó tái tạo đúng những đặc tính quan trọng của hệ thống thực tế, chứ không chỉ tạo ra một hình ảnh trông có vẻ giống.

## 2. Đề cao thí nghiệm tính toán

Trong khoa học thực nghiệm, nhà nghiên cứu thường quan sát thế giới, đặt giả thuyết, xây dựng mô hình rồi đối chiếu với dữ liệu.

Wolfram nhấn mạnh thêm một hướng tiếp cận: tạo ra một không gian rộng lớn các quy tắc, cho chúng chạy, phân loại kết quả và tìm kiếm những hiện tượng chưa được dự đoán trước.

Quy trình này có thể tóm tắt:

Xác định quy tắc

Mô phỏng nhiều bước

Phân loại hành vi và phát hiện mẫu hình

Xây dựng giả thuyết mới

Kiểm nghiệm bằng phân tích hoặc dữ liệu thực tế

Điểm mạnh của phương pháp này là khả năng phát hiện những hiện tượng mà nhà nghiên cứu không nghĩ đến trước khi chạy mô phỏng.

Điểm cần bổ sung là bước cuối: mô phỏng một hiện tượng không giống với việc chứng minh hiện tượng ấy diễn ra trong tự nhiên. Một mô hình có thể tạo ra kết quả đẹp mắt nhưng vẫn không đúng về cơ chế, tham số hoặc điều kiện biên của thế giới thực.

## 3. Phân biệt độ phức tạp của quy tắc và độ phức tạp của kết quả

Đây là đóng góp có tính khái niệm đặc biệt hữu ích.

Giả sử hai chương trình:

- Chương trình A dài 10 dòng nhưng tạo ra kết quả không thể dự đoán nhanh.
- Chương trình B dài 1.000 dòng nhưng có thể rút gọn thành một công thức cho phép tính ngay kết quả cuối cùng.

Số dòng mã không cho biết chương trình nào dễ dự đoán hơn.

Điều này nhắc chúng ta rằng độ phức tạp của mô tả, độ phức tạp của hành vi và độ khó tính toán là ba đại lượng khác nhau.

Trong quản trị, kinh tế và đời sống cá nhân, bài học tương tự là: một bộ quy tắc ngắn không đảm bảo hệ thống dễ kiểm soát; nhiều tương tác nhỏ có thể tích lũy thành kết quả khó lường.

## 4. Khuyến khích tư duy liên ngành

Wolfram cố gắng đặt các vấn đề vốn được nghiên cứu riêng biệt vào cùng một ngôn ngữ: quy tắc, trạng thái, quá trình chuyển đổi và kết quả tính toán.

Cách nhìn này có giá trị vì nó giúp người đọc đặt những câu hỏi mới giữa các lĩnh vực.

Nhưng tính thống nhất của ngôn ngữ không đồng nghĩa với tính thống nhất của cơ chế. Một mô hình tế bào, một mạng sinh học và một hệ lượng tử có thể cùng được biểu diễn bằng ngôn ngữ tính toán, song các giả định và tiêu chuẩn kiểm chứng của chúng vẫn rất khác nhau.

Đây vừa là sức mạnh, vừa là giới hạn của chương trình nghiên cứu mà Wolfram đề xuất.

# IV. Phê bình phản biện: Những điểm yếu quan trọng

## 1. Vấn đề lớn nhất: tham vọng vượt quá bằng chứng

Tiêu đề A New Kind of Science không đơn thuần giới thiệu một phương pháp mới. Nó hàm ý rằng những gì Wolfram trình bày có thể làm thay đổi căn bản cách khoa học được tiến hành.

Để đánh giá tuyên bố đó, cần tách ba cấp độ:

| Cấp độ tuyên bố                                                            | Đánh giá                                               |
| -------------------------------------------------------------------------- | ------------------------------------------------------ |
| Các quy tắc đơn giản có thể tạo ra hành vi phức tạp                        | Được minh họa thuyết phục bằng nhiều mô hình tính toán |
| Mô phỏng và khảo sát quy tắc là một phương pháp nghiên cứu hữu ích         | Có giá trị thực tiễn và khả năng mở rộng               |
| Phương pháp này tạo thành một nền tảng mới để giải thích phần lớn tự nhiên | Chưa được chứng minh đầy đủ                            |

Nhà vật lý Leo P. Kadanoff đánh giá cao giá trị sư phạm và khả năng minh họa của cuốn sách, nhưng cho rằng những suy đoán về vật lý cơ bản vẫn chưa đạt mức độ của một lý thuyết khoa học hoàn chỉnh. Ông cũng chỉ ra các sai sót chuyên môn và những thiếu sót trong cách trình bày lịch sử nghiên cứu.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://physicstoday.aip.org\&sz=32)

Physics Today



Đây là điểm phân biệt quan trọng giữa một nhà tư tưởng có tầm nhìn và một nhà khoa học đã xác lập được lý thuyết.

Một ý tưởng có thể táo bạo, nhất quán và hấp dẫn mà vẫn chưa có đủ bằng chứng.

Phản biện cốt lõi: Wolfram chứng minh khá tốt rằng các quy tắc đơn giản có thể sinh ra độ phức tạp. Ông chưa chứng minh tương xứng rằng khuôn khổ đó là lời giải thích ưu việt cho những hệ thống tự nhiên mà ông muốn lý giải.

## 2. Vấn đề tính mới: phát hiện mới hay tái tổ chức tri thức?

Nhiều chủ đề trong sách đã có lịch sử nghiên cứu trước Wolfram, bao gồm:

- Ô-tô-mát tế bào và tính toán phổ quát.
- Lý thuyết hỗn loạn và các hệ động lực học.
- Fractal và sự hình thành cấu trúc.
- Các mô hình tính toán của tự nhiên.
- Những đề xuất xem vũ trụ như một hệ thống tính toán.

Wolfram không phải người đầu tiên nghiên cứu các lĩnh vực này. Đóng góp đáng chú ý của ông nằm ở việc khảo sát có hệ thống một tập hợp lớn các quy tắc đơn giản, trình bày các kết quả bằng hình ảnh trực quan và phát triển một cách diễn giải thống nhất.

Nhà phê bình có thể đặt câu hỏi: nếu nhiều thành phần đã tồn tại, điều gì khiến toàn bộ công trình trở thành một cuộc cách mạng?

Câu trả lời hợp lý nhất là giá trị của sự tổng hợp và phương pháp thực nghiệm, chứ không phải mọi ý tưởng đều mới xuất hiện lần đầu trong cuốn sách.

Kadanoff cho rằng cách trình bày của Wolfram khiến độc giả khó phân biệt giữa kết quả thực sự mới, kiến thức đã biết được minh họa theo cách mới và những giả thuyết chưa hoàn thiện.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://physicstoday.aip.org\&sz=32)

Physics Today



Từ đó, có một nguyên tắc quan trọng khi đọc sách khoa học: đừng đánh đồng ba việc sau:

1. Tác giả lần đầu tiên nhận ra một điều.
2. Tác giả lần đầu tiên chứng minh điều đó.
3. Tác giả lần đầu tiên trình bày điều đó theo một cách có sức thuyết phục.

Ba đóng góp này có giá trị khác nhau.

## 3. Nguyên lý tương đương tính toán có thể quá rộng để tạo ra dự đoán hữu ích

Một lý thuyết khoa học tốt không chỉ giải thích được những gì đã quan sát. Nó còn phải giúp ta phân biệt điều gì sẽ xảy ra với điều gì sẽ không xảy ra.

Đây là khó khăn đối với Principle of Computational Equivalence.

Nếu nhiều hệ thống có hành vi phức tạp đều được xếp vào cùng một nhóm về năng lực tính toán, thì sự phân loại ấy có thể chưa cho biết:

- Hệ thống nào nhạy cảm hơn với điều kiện ban đầu?
- Hệ thống nào có thể được dự đoán bằng một mô hình gần đúng?
- Hệ thống nào chuyển sang một chế độ hành vi khác khi tham số thay đổi?
- Hệ thống nào có thể được kiểm soát hoặc tối ưu hóa?
- Hệ thống nào tạo ra những kết quả định lượng cụ thể mà các mô hình cạnh tranh không dự đoán được?

Tính toán phổ quát không có nghĩa mọi chương trình đều có cùng hiệu suất, cấu trúc hay khả năng dự đoán. Một chương trình có thể mô phỏng bất kỳ phép tính nào về nguyên tắc, nhưng điều đó không có nghĩa nó thực hiện mọi phép tính nhanh chóng hoặc hiệu quả.

Nhà khoa học máy tính Scott Aaronson phê bình cách Wolfram liên hệ một số ý tưởng của mình với lý thuyết độ phức tạp tính toán, đồng thời đặt vấn đề về khả năng tương thích của một mô hình vật lý xác định mà Wolfram đề xuất với thuyết tương đối hẹp và vi phạm bất đẳng thức Bell.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://arxiv.org\&sz=32)

arXiv



Những phản biện này không phủ định giá trị của ô-tô-mát tế bào. Chúng chỉ cho thấy việc mở rộng từ một tính chất tính toán sang một lý thuyết về tự nhiên đòi hỏi nhiều bước chứng minh bổ sung.

## 4. Nguy cơ biến mọi thứ thành một bài toán tính toán

Đây là phản biện sâu hơn về mặt phương pháp luận.

Nếu ta biểu diễn một hiện tượng bằng một chương trình, ta đã tạo ra một mô hình của hiện tượng đó. Nhưng mô hình hóa không đồng nghĩa với giải thích đầy đủ.

Giả sử ta xây dựng một chương trình mô phỏng sự phát triển của một khu rừng. Chương trình có thể tạo ra các mẫu hình giống rừng thật. Tuy nhiên, để khẳng định mô hình giải thích sự phát triển của rừng, ta còn cần biết liệu nó có phản ánh đúng các cơ chế sinh học, khí hậu, đất, cạnh tranh và trao đổi chất hay không.

Một mô phỏng đẹp có thể là kết quả của những quy tắc tùy ý.

Vì vậy, cần phân biệt:

- Mô phỏng hiện tượng: tạo ra một kết quả trông giống hiện tượng.
- Giải thích cơ chế: xác định các quá trình thực sự tạo ra hiện tượng.
- Dự đoán có thể kiểm nghiệm: đưa ra kết quả cụ thể mà dữ liệu mới có thể xác nhận hoặc bác bỏ.

Một mô hình tính toán có thể thực hiện cả ba nhiệm vụ, nhưng không tự động thực hiện được chỉ vì nó tạo ra một mẫu hình phức tạp.

Đây cũng là giới hạn của cách tiếp cận quá thiên về hình ảnh: hình ảnh làm cho một ý tưởng dễ hiểu hơn, nhưng không thay thế được bằng chứng định lượng.

## 5. Từ mô hình đến vật lý cơ bản: khoảng cách chưa được lấp đầy

Phần tham vọng nhất của cuốn sách là ý tưởng dùng các hệ thống tính toán để hiểu những vấn đề nền tảng của vật lý.

Để một mô hình tính toán trở thành lý thuyết vật lý đáng tin cậy, nó phải đáp ứng những yêu cầu khắt khe, chẳng hạn:

- Xác định chính xác các biến và quy tắc vận hành.
- Giải thích hoặc tái tạo những định luật đã được kiểm chứng.
- Đưa ra dự đoán định lượng.
- Phù hợp với các kết quả thực nghiệm hiện có.
- Tạo ra dự đoán mới có thể phân biệt nó với các lý thuyết cạnh tranh.

Kadanoff nhận xét rằng phần vật lý cơ bản của sách chứa những suy đoán đáng quan tâm, nhưng chưa phải một lý thuyết hoàn chỉnh. Aaronson cũng đưa ra các phản biện kỹ thuật đối với một số đề xuất liên quan đến cơ học lượng tử.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://physicstoday.aip.org\&sz=32)

Physics Today

+1



Do đó, không nên đọc cuốn sách như thể Wolfram đã chứng minh rằng vũ trụ thực sự là một chương trình máy tính theo nghĩa đen.

Cách diễn giải thận trọng hơn là: tư duy tính toán cung cấp một lớp mô hình tiềm năng để nghiên cứu tự nhiên; việc mô hình nào phản ánh đúng thực tại phải được xác định bằng toán học và thực nghiệm.

## 6. Cấu trúc sách và phong cách lập luận

Cuốn sách có quy mô rất lớn, nhiều hình minh họa và phần ghi chú cuối sách dài. Đây vừa là lợi thế vừa là hạn chế.

Ưu điểm:

- Hình ảnh giúp người đọc quan sát trực tiếp sự tiến hóa của các hệ thống.
- Người không chuyên vẫn có thể tiếp cận nhiều khái niệm về tính toán và độ phức tạp.
- Các thí nghiệm được trình bày rộng, tạo điều kiện hình thành trực giác.

Nhược điểm:

- Khối lượng nội dung khiến luận điểm chính dễ bị chìm.
- Phần ghi chú dài làm gián đoạn mạch đọc.
- Việc sử dụng ngôn ngữ và ký hiệu riêng của Wolfram làm tăng chi phí đối chiếu với tài liệu khoa học tiêu chuẩn.
- Giọng điệu tự tin cao đôi khi khiến ranh giới giữa kết quả đã xác lập và suy đoán trở nên kém rõ ràng.

Đây không chỉ là vấn đề văn phong. Trong một tác phẩm có tham vọng khoa học lớn, cách trình bày phải giúp độc giả kiểm tra luận cứ, truy nguyên nguồn gốc và phân biệt mức độ chắc chắn của từng kết luận.

Kadanoff chỉ rõ những hạn chế về ghi nhận lịch sử nghiên cứu và khả năng truy tìm nguồn gốc của các kết quả.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://physicstoday.aip.org\&sz=32)

Physics Today



# V. Đánh giá theo các tiêu chuẩn khoa học

| Tiêu chí                              | Đánh giá phản biện                                                      |
| ------------------------------------- | ----------------------------------------------------------------------- |
| Giá trị khám phá                      | Cao trong khảo sát các quy tắc đơn giản và hành vi phức tạp             |
| Khả năng trực quan hóa                | Rất cao                                                                 |
| Giá trị phương pháp luận              | Cao: nhấn mạnh thí nghiệm tính toán                                     |
| Tính mới của toàn bộ hệ thống ý tưởng | Không đồng đều; nhiều nền tảng đã có trước                              |
| Độ chặt chẽ của các khái quát rộng    | Chưa thuyết phục đồng đều                                               |
| Giá trị đối với vật lý cơ bản         | Gợi mở, nhưng nhiều đề xuất chưa hoàn chỉnh                             |
| Tính dễ đọc                           | Không cao đối với độc giả muốn có một lập luận ngắn gọn                 |
| Tầm ảnh hưởng tư tưởng                | Đáng kể, nhưng không đồng nghĩa với việc toàn bộ luận đề được chấp nhận |

Đánh giá này phù hợp với sự phân biệt giữa hai mặt của cuốn sách: thành tựu trong thực nghiệm tính toán và tham vọng xây dựng một khuôn khổ khoa học rộng hơn. Ngay trong các đánh giá học thuật ban đầu, hai mặt ấy đã được nhìn nhận khác nhau.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://old.maa.org\&sz=32)

Mathematical Association of America

+2



# VI. Những ứng dụng thực tiễn: Đưa tư duy của Wolfram vào đời sống

Giá trị thực tế của cuốn sách không nằm ở việc áp dụng ô-tô-mát tế bào vào mọi vấn đề, mà ở việc học cách suy nghĩ về các hệ thống có nhiều tương tác và kết quả khó dự đoán.

## 1. Trong kinh doanh: kết quả tập thể không chỉ phụ thuộc vào năng lực cá nhân

Một doanh nghiệp có thể được xem như một hệ thống gồm nhiều tác nhân: nhân viên, quản lý, khách hàng, nhà cung cấp và đối thủ cạnh tranh.

Mỗi tác nhân phản ứng theo những quy tắc nhất định. Chẳng hạn:

- Nhân viên ưu tiên công việc được thưởng.
- Quản lý ưu tiên chỉ số được báo cáo.
- Khách hàng phản ứng với giá và chất lượng.
- Các bộ phận điều chỉnh hành vi theo cách những bộ phận khác được đánh giá.

Từng quy tắc có thể hợp lý khi xét riêng. Nhưng khi kết hợp, chúng có thể tạo ra kết quả bất lợi: nhân viên tối ưu chỉ số cá nhân thay vì hiệu quả chung, các bộ phận đổ lỗi cho nhau, hoặc tổ chức hy sinh chất lượng dài hạn để đạt mục tiêu ngắn hạn.

Đây là một ứng dụng tư duy hệ thống có liên hệ với Wolfram, chứ không phải bằng chứng rằng doanh nghiệp thực sự vận hành theo một ô-tô-mát tế bào cụ thể.

Bài học: khi kết quả không như mong muốn, đừng chỉ hỏi ai đã làm sai. Hãy kiểm tra những quy tắc và cơ chế khuyến khích đang tạo ra hành vi đó.

## 2. Trong đầu tư: hiểu quy tắc không đồng nghĩa với dự đoán được kết quả

Một thị trường tài chính bao gồm nhiều người tham gia, mỗi người có thông tin, mục tiêu và kỳ vọng khác nhau. Họ liên tục phản ứng với hành động của nhau.

Điều này tạo ra một hệ thống phản hồi: giá thay đổi khiến nhà đầu tư điều chỉnh quyết định, các quyết định ấy lại ảnh hưởng đến giá.

Một quy tắc hành vi đơn giản như mua khi giá tăng có thể góp phần tạo ra xu hướng tăng mạnh trong một số điều kiện. Nhưng khi nhiều người áp dụng cùng quy tắc, kết quả có thể thay đổi do chính hành vi của họ.

Tư duy tính toán nhắc ta rằng:

- Mô hình đơn giản có thể tạo ra động lực học phức tạp.
- Một quy luật quan sát được trong quá khứ chưa chắc ổn định trong tương lai.
- Hiểu cơ chế không đồng nghĩa với dự đoán chính xác mọi biến động.
- Mô hình cần được kiểm tra ngoài mẫu và đối chiếu với dữ liệu thực tế.

Không nên dùng nguyên lý tương đương tính toán như một công cụ dự báo thị trường. Nó không cung cấp sẵn xác suất lợi nhuận, thời điểm mua bán hay mức độ rủi ro.

## 3. Trong tự rèn luyện: thay đổi quy tắc nhỏ thay vì chỉ dựa vào ý chí

Đây là ứng dụng gần với mục tiêu phát triển bản thân hơn cả.

Hãy xem một thói quen trì hoãn. Ta có thể mô tả một vòng lặp:

Công việc khó hoặc gây khó chịu

Chuyển sang hoạt động dễ chịu hơn

Khó chịu giảm tạm thời

Não bộ được củng cố xu hướng né tránh

Kết quả: lần sau, phản ứng trì hoãn có thể xuất hiện dễ dàng hơn.

Nếu chỉ tự nhủ phải có kỷ luật hơn, ta đang cố thay đổi kết quả mà chưa chắc đã thay đổi cơ chế tạo ra kết quả.

Có thể thử sửa quy tắc vận hành:

- Đặt điện thoại ngoài tầm với khi làm việc.
- Chia nhiệm vụ thành bước đầu tiên đủ nhỏ để bắt đầu ngay.
- Thực hiện một phiên tập trung ngắn trước khi cho phép giải trí.
- Theo dõi số lần bắt đầu đúng giờ thay vì chỉ đánh giá tổng thời gian làm việc.

Đây là cách ứng dụng tư duy hệ thống: điều chỉnh môi trường và phản hồi để hành vi mong muốn trở nên dễ thực hiện hơn.

Tuy nhiên, con người không phải những ô-tô-mát đơn giản. Cảm xúc, ký ức, ý thức, quan hệ xã hội và khả năng tự phản tỉnh khiến việc mô hình hóa hành vi con người phức tạp hơn nhiều. Mô hình chỉ hữu ích nếu được điều chỉnh theo bằng chứng và trải nghiệm thực tế.

# VII. Mối liên hệ với triết học và mục tiêu giảm tham, sân, si

Một cách đọc sâu hơn là xem cuốn sách như lời nhắc về giới hạn của trực giác.

## 1. Giảm si: đừng nhầm điều dễ hiểu với điều đúng

Một lời giải thích nghe hợp lý có thể không phản ánh đúng cơ chế thực sự.

Tương tự, một hình ảnh phức tạp không tự động chứng minh một lý thuyết sâu sắc. Ta cần hỏi: quy tắc là gì, giả định nào đang được sử dụng, bằng chứng nào hỗ trợ kết luận và điều gì có thể bác bỏ nó?

Đây là sự kết hợp giữa tư duy khoa học và thực hành nhận thức: nhận biết điều mình biết, điều mình chưa biết và mức độ chắc chắn của từng nhận định.

## 2. Giảm sân: thay phán xét bằng việc tìm hiểu cơ chế

Khi một người hành động thiếu hợp lý, phản ứng tức thời có thể là quy kết họ ích kỷ, lười biếng hoặc thiếu năng lực.

Tư duy hệ thống đề xuất một câu hỏi khác: những điều kiện nào đang khiến hành vi đó xuất hiện và tiếp tục được duy trì?

Câu hỏi này không xóa bỏ trách nhiệm cá nhân. Nó bổ sung một tầng phân tích về nguyên nhân, giúp lựa chọn cách can thiệp hiệu quả hơn.

## 3. Giảm tham: không biến một ý tưởng thành lời giải thích cho mọi thứ

Một lý thuyết thống nhất rất hấp dẫn vì nó tạo cảm giác rằng ta đã nắm được bản chất của nhiều hiện tượng.

Nhưng mong muốn có một lời giải thích bao trùm cũng có thể khiến ta gán ghép những hiện tượng khác nhau vào cùng một khuôn mẫu.

Bài học ở đây là giữ sự cởi mở mà không dễ dãi: sẵn sàng khám phá một mô hình mới, đồng thời không yêu cầu thực tế phải phù hợp với mô hình đó.

Có thể xem đây là một nguyên tắc thực hành nhận thức:

Giữ vững sự tò mò, nhưng không gắn bản ngã vào việc phải chứng minh rằng mình đúng.

# VIII. Nên đọc cuốn sách như thế nào?

Bước 1 — Tập trung vào những gì có thể quan sát

Bắt đầu với các ô-tô-mát tế bào, các quy tắc chuyển trạng thái và bốn lớp hành vi. Tự hỏi liệu quy tắc có thật sự đơn giản và kết quả có thật sự phức tạp hay không.

Bước 2 — Phân biệt kết quả và diễn giải

Khi Wolfram đưa ra một hình ảnh hoặc thí nghiệm, hãy tách điều trực tiếp quan sát được khỏi kết luận rộng hơn mà ông muốn rút ra.

Bước 3 — Đọc cùng các phản biện

Đối chiếu sách với bài đánh giá của Leo P. Kadanoff trên Physics Today và bài phê bình kỹ thuật của Scott Aaronson. Hai nguồn này giúp kiểm tra khoảng cách giữa trực giác tính toán và các tuyên bố khoa học rộng hơn.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://physicstoday.aip.org\&sz=32)

Physics Today

+1



Bước 4 — Chuyển thành một thí nghiệm cá nhân

Chọn một hệ thống nhỏ trong công việc hoặc đời sống. Xác định quy tắc đang vận hành, dự đoán kết quả khi thay đổi một điều kiện, rồi quan sát xem dự đoán có đúng không.

# IX. Phán quyết cuối cùng

## Đánh giá tổng thể: 8/10 về giá trị tư duy; thấp hơn về mức độ hoàn thiện của chương trình khoa học thống nhất

Đây là đánh giá phân tích, không phải điểm số khảo sát độc giả hay đánh giá học thuật chính thức.

A New Kind of Science đáng đọc nhất khi được xem là một công trình thực nghiệm tính toán giàu sức gợi mở, không phải một lý thuyết đã giải thích thống nhất tự nhiên.

Ba kết luận cần giữ lại:

1. Điều được chứng minh tốt: những quy tắc đơn giản có thể tạo ra các hành vi phức tạp, và việc mô phỏng có thể tiết lộ những hiện tượng khó nhận ra bằng trực giác.
2. Điều có giá trị nhưng cần giới hạn: tư duy tính toán là một phương pháp nghiên cứu hữu ích, nhưng phải bổ sung bằng phân tích toán học, dữ liệu và kiểm nghiệm thực nghiệm.
3. Điều chưa được chứng minh tương xứng: nguyên lý tương đương tính toán và các suy đoán về vật lý cơ bản chưa đủ để xác lập toàn bộ chương trình nghiên cứu như một cuộc cách mạng khoa học thống nhất.

Tác phẩm mạnh nhất khi Wolfram cho người đọc thấy một hệ thống thực sự vận hành như thế nào. Tác phẩm yếu hơn khi từ những quan sát ấy, ông đưa ra kết luận quá rộng về bản chất của khoa học và tự nhiên.

## Câu hỏi để tự kiểm tra tư duy

Sau khi đọc cuốn sách, hãy thử trả lời ba câu hỏi sau mà không nhìn lại phần phân tích:

- Một quy tắc đơn giản có thể tạo ra kết quả phức tạp, nhưng tại sao điều đó không đủ để chứng minh rằng quy tắc ấy mô tả đúng tự nhiên?
- Sự khác biệt giữa một mô hình có khả năng mô phỏng và một lý thuyết có khả năng dự đoán là gì?
- Trong đời sống của bạn, có quy tắc nhỏ nào đang tạo ra một kết quả lặp lại mà bạn muốn thay đổi?

Nếu có thể trả lời rõ ba câu hỏi này, bạn đã nắm được phần cốt lõi của cuốn sách mà không cần đồng ý với mọi tuyên bố của tác giả.