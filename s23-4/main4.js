let i;
let arr = [];
let check = 0;
let n = +prompt("Hãy nhập phần tử bất kỳ:")
if (n > 0) {
    for (i = 0; i < n; i++) {
        let character = prompt("Nhập ký tự");
        arr.push(character);
    }
    for (i = 0; i < n; i++) {
        if (arr[i] >= "0" && arr[i] <= "9") {
            alert(arr[i]);
            check++;
        }
    }
    if (check == 0) {
        alert("Không có ký tự số");
    }
} else if (n == 0) {
    alert("Không có ký tự số");
} else {
    alert("Không hợp lệ");
}