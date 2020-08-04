// 所有不具有“真实”值的即为 False

console.log("0的布尔值：" + Boolean(0));
console.log("-0的布尔值：" + Boolean(-0));
console.log("空值的布尔值：" + Boolean(""));
var x;
console.log("undefined的布尔值：" + Boolean(x));
x = null;
console.log("null的布尔值：" + Boolean(x));
x = 1 / "aaa";
console.log("Nan的布尔值：" + Boolean(x));


// ==是值等于
var x = 5;
console.log("5==8：" + (x == 8));
console.log("5==5：" + (x == 5));
console.log("5==\"5\"：" + (x == "5"));
// ===值和类型都相等
console.log("5===\"5\"：" + (x === "5"));
// !== 值不相等或类型不相等
console.log("5!==8：" + (x !== 8));
console.log("5!==\"5\"：" + (x !== "5"));
console.log("5!==5：" + (x !== 5));

// Switch case 使用严格比较（===）
x = "0";
switch (x) {
    case 0:
        console.log("匹配到0");
        break
    case 1:
        console.log("匹配到1");
        break
    default:
        console.log("匹配到default");
        break
}




