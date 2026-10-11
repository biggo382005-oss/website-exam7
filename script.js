function search() {
    let x = document.getElementById("search").value;

    if (x == "") {
        alert("Nhập từ khóa cần tìm!");
    } else {
        alert("Bạn đang tìm: " + x);
    }
}
document.getElementById("myForm").onsubmit = function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let content = document.getElementById("content").value.trim();

    document.querySelectorAll("small").forEach(x => x.innerText = "");

    let ok = true;

    if (name == "") {
        document.getElementById("e1").innerText = "Nhập họ tên";
        ok = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("e2").innerText = "Email không hợp lệ";
        ok = false;
    }

    if (!/^[0-9]{9,11}$/.test(phone)) {
        document.getElementById("e3").innerText = "Số điện thoại không hợp lệ";
        ok = false;
    }

    if (content == "") {
        document.getElementById("e4").innerText = "Nhập nội dung";
        ok = false;
    }

    if (ok) {
        alert("Đăng ký thành công!");
        this.reset();
    }
};