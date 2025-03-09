let arr = [4, 7, 9, 2, 5, 6];
if (arr.length === 0) {
    console.log("Không có số lớn nhất");
} else {
    let maxNumber = Math.max(...arr);
    let maxInput = arr.indexOf(maxNumber);
    console.log("Số lớn nhất:", maxNumber);
    console.log("Vị trí:", maxInput);
}