let n = +prompt("Nhập số phần tử của mảng:");
if (n < 0) {
    console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let value = prompt(`Nhập phần tử ${i + 1}:`);
        arr.push(value);
    }
    let numbers = arr.filter(item => !isNaN(item) && item.trim() !== "").map(Number);
    if (numbers.length > 0) {
        console.log("Tổng các số trong mảng:", numbers.reduce((a, b) => a + b, 0));
    } else {
        console.log("Không có phần tử nào là số");
    }
}