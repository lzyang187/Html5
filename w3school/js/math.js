// 四舍五入为最接近的整数
console.log("round(Math.PI) = " + Math.round(Math.PI));

console.log("ceil(3.1) = " + Math.ceil(3.1));
console.log("floor(3.7) = " + Math.floor(3.7));

// x 的 y 次幂
console.log("pow(4, 2) = " + Math.pow(4, 2));
// x 的平方根
console.log("sqrt(16) = " + Math.sqrt(16));

console.log("abs(-3.1) = " + Math.abs(-3.1));

console.log("min(3, 9) = " + Math.min(3, 9));
console.log("max(3, 9, -1) = " + Math.max(3, 9, -1));

// 返回介于 0（包括） 与 1（不包括） 之间的随机数：
console.log("random() = " + Math.random());
console.log("random() = " + Math.random());

// 返回介于 min 和 max（都包括）之间的随机数：
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}








