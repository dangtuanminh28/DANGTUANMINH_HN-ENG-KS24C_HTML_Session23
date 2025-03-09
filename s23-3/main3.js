let i
let arr = []
let check = 0
let n = +prompt("Hãy nhập phần tử bất kỳ:");
if (n > 0) {
    for (i = 0; i < n; i++) {
        let num = prompt("Nhập số bất kì:");
        if (isNaN(num)) {
            alert("Số lượng phần tử không hợp lệ");
            break
        } else {
            arr.push(num);
        }
    }
    for (i = 0; i < n; i++) {
        if (arr[i] < 0) {
            check++;
        }
    }
    alert(check)
} else if (n == 0) {
    alert("Mảng không có phần tử");
} else {
    alert("Số lượng phần tử không hợp lệ");
}