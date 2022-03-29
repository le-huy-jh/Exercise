### Git
Git là một hệ thống quản lý phiên bản phân tán
Git state: commited, staged, modified
Lợi ích:
Lưu lại những phiên bản khác nhau của mã nguồn dự án phần mềm. 
Khôi phục lại các mã nguồn từ một phiên bản bất kỳ khác. 
Hỗ trợ so sánh dễ dàng hơn giữa các phiên bản. 
Phát hiện được những vị trí, những phần mà người khác đã chỉnh sửa làm phát sinh lỗi. 
Khôi phục lại những tập tin đã bị mất đi. 
Thử nghiệm và mở rộng các tính năng của dự án một cách dễ dàng mà không làm ảnh hưởng đến các phiên bản chính. 
Remote

### Commit
Commit là lưu vào csdl nội dung trong vùng staging, kèm thông tin mô tả của commit.
Git lưu dữ liệu dưới dạng một loạt "ảnh chụp" (snapshot) của một tập hợp các file, có nghĩa là mỗi khi bạn commit (lưu lại) thì Git tiến hành chụp lại hệ thống các file thời điểm đó và lưu giữ một tham chiếu đến ảnh chụp dó, nhớ rằng các file không có thay đổi thì Git sẽ không lưu lại file đó lần nữa mà chỉ có một liên kết đến file đã lưu ở lần trước.
 ![](https://images.viblo.asia/67e40d3c-e395-4a78-a4fd-06be3fe8b6aa.png)
Git commit -m “Message”


### A list of possible issues when a commit is broken: 

Làm hỏng feature, commit không đúng với code 

### Branch
Branch: thực chất là con trỏ trỏ tới commit (con trỏ mặc định sẽ là master)

Issues: thường là conflict. Merge branch không review gây các lỗi rất khó phát hiện. 

tạo branch: git branch crazy-experiment

remove brach: git branch -d crazy-experiment (d là đã merge thi xoa được, chưa merge thì dùng D)

switch: git checkout <ten branch>

push local branch to remote: git push -u origin <branch>


### Basic command:

Tạo một kho chứa Git (git repo ở local)
$ git init

Sao chép một kho chứa đã tồn tại
$ git clone https://github.com/user/repository.git

Cập nhật thay đổi

$ git add . (đưa vào staging area)

$ git commit -m "Message"

Cập nhật lên server

$ git remote add origin <remote_url>

$ git push origin <name_branch>

Gộp nhánh

$ git merge <new_branch>

Pull từ remote repository, auto merge

$ git pull

Nạp dữ liệu nhưng không merge ngay

$ git fetch

### Conflict
Xung đột có thể xảy ra khi hai hoặc nhiều người thay đổi cùng một file.

Trường hợp: tạo branch rồi code cả trên 2 branch sửa cùng 1 chỗ, có 1 branch master mình pull về code rồi có người khác cũng code trên master xong người đó push trước, đến khi mình pull về thì conflict.

Giải quyết: chọn code trong branch merge

### Merge and Rebase
Merge: gộp thay đổi của nhánh này vào nhánh khác. Xuất hiện 1 commit merger mới là điểm chung của 2 nhánh sử dụng git merge nếu muốn sắp xếp các commit theo mặc định. Làm commit history dài.

Rebase: đưa nhánh này vào đầu nhánh kia. Nếu muốn history sạch (do tuyến tính), commit của branch mình là mới nhất

Lựa chọn dùng merger vì sẽ không thay đổi nhánh, lịch sử commit giữ nguyên, dễ revert.

### Good message:

Dùng câu mệnh lệnh

Có thể sử dụng mẫu câu If applied, this commit will để giúp commit rõ hơn

In hoa chữ cái đầu

Truyền đạt mà ko cần xem mã nguồn

Sử dụng body để mô tả chi tiết hơn, nên trả lời tại sao có commit này

Tối đa 50 ký tự cho phần chủ đề và 72 ký tự mỗi dòng cho phần thân message.

### Question
Q1: branch master. Vì khi code feature xong tích hợp vào main ổn rồi từ main tích hợp production. Hạn chế conflict.

Q2: không cần làm gì hết

Q3: tạo branch A từ branch production. ở branch production revert lại commit chưa merge, xong rồi merge (không auto merge) với branch A

