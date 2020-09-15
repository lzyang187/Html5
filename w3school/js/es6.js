// 新增let 语句允许您使用块作用域声明变量。

var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
}
// Here x is 10

// 新增const 语句允许您声明常量（具有常量值的 JavaScript 变量）。

var x = 10;
// 此处，x 为 10
{
    
    const x = 6;
    // 此处，x 为 6
}
// 此处，x 为 10

// const 不是真正的常数，我们不能更改常量原始值，但我们可以更改常量对象的属性。

// 创建 const 对象：
const car = { type: "porsche", model: "911", color: "Black" };
// 您可以更改属性：
car.color = "White";
// 您可以添加属性：
car.owner = "Bill";
// 但是您无法重新为常量对象赋值 以下代码会出错
// car = { type: "Volvo", model: "XC60", color: "White" };


// es6允许为函数的参数指定默认值
function myFun(x, y = 10) {
    return x + y;
}
console.log("调用有默认值的函数：" + myFun(5));
console.log("调用有默认值的函数：" + myFun(5, 5));

// Number新增的两个方法
console.log("Number.isInteger(1) = " + Number.isInteger(1));
// 安全整数是可以精确表示为双精度数的整数。
console.log("Number.isSafeInteger(1) = " + Number.isSafeInteger(1));

// 如果参数为 Infinity 或 NaN，则全局 isFinite() 方法返回 false
console.log("isFinite(10 / 0) = " + isFinite(10 / 0));
// 如果参数是 NaN，则全局 isNaN() 方法返回 true。否则返回 false
console.log("isNaN(10 / 0) = " + isNaN(10 / 0));


// 箭头函数：简洁，不需要 function 关键字、return 关键字以及花括号。

// ES5
var x = function (x, y) {
    return x * y;
};

// ES6
const y = (x, y) => x * y;


