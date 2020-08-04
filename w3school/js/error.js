// JavaScript 中的数字均保存为 64 位的浮点数（Floats）
var x = 0.1;
var y = 0.2;
// 这时的z并不是0.3
var z = x + y;
console.log("0.1 + 0.2 = " + z);
// 这样解决上述问题
z = (x * 10 + y * 10) / 10;
console.log("0.1 + 0.2 = " + z);

// 在 JavaScript 中，数组使用数字索引。

// 在 JavaScript 中，对象使用命名索引。

var person = {
    fName: "tom",
    age: 18
}
console.log("对象使用命名索引：" + person.fName);
// 会出错
console.log("对象使用数字索引：" + person[0]);

// 在测试非 null 之前，必须先测试未定义
var myObj;
if (typeof myObj !== "undefined" && myObj !== null) {

}

// JavaScript 不会为每个代码块创建新的作用域。
// 认为这段代码 i 是 undefined，是新的 JavaScript 开发者的常见错误
for (var i = 0; i < 10; i++) {
    // 代码块
}
console.log("i = " + i);