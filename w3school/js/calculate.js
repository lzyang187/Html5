var x = 7, y = 2;
// % 是求余运算符
console.log("7 % 2 = " + 7 % 2);
// 取幂运算符（**）将第一个操作数提升到第二个操作数的幂。
console.log("7 ** 2 = " + 7 ** 2);
// x ** y 产生的结果与 Math.pow(x,y) 相同:
console.log("Math.pow(7, 2) = " + Math.pow(7, 2));

// JavaScript 从左向右计算表达式。不同的次序会产生不同的结果：
console.log("porsche" + 911);
// JavaScript 把 900 和 11 视作数值，直到遇见 "Porsche"。
console.log(900 + 11 + "porsche");
// 由于第一个操作数是字符串，因此所有操作数都被视为字符串。
console.log("porsche" + 900 + 11);

// 除了+，*、/、-，都会尝试将字符串转化为数字
var str = "100";
var z = 10;
console.log(str / z);
console.log(str * z);
console.log(str - z);

// NaN（Not a Number），比如用一个非数字字符串进行除法
console.log(z / "str");
// 函数 isNaN() 来确定某个值是否是数
console.log(isNaN("str"));

// Infinity （或 -Infinity）是 JavaScript 在计算数时超出最大可能数范围时返回的值。
console.log(z / 0);

var num = 16;
// toString() 方法把数输出为十六进制、八进制或二进制。
console.log("toString部分：");
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

// toFixed() 返回字符串值，它包含了指定位数小数的数字
console.log("toFixed部分：");
x = 9.656;
console.log(x.toFixed(0));
// toFixed(2) 非常适合处理金钱
console.log(x.toFixed(2));
console.log(x.toFixed(4));

// toPrecision() 返回字符串值，它包含了指定长度的数字
console.log("toPrecision部分：");
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(3));

// Number() 可用于把 JavaScript 变量转换为数值
console.log("Number部分：");
console.log(Number(true));
console.log(Number(new Date()));
console.log(Number("10"));
//如果无法转换数字，则返回 NaN。
console.log(Number("10 20"));

// parseInt() 解析一段字符串并返回数值。允许空格。只返回首个数字（int型）
console.log("parseInt部分：");
console.log(parseInt(10.3));
console.log(parseInt("20 30"));
// 如果无法转换为数值，则返回 NaN (Not a Number)。
console.log(parseInt("years 20"));

// parseFloat() 解析一段字符串并返回数值。允许空格。只返回首个数字（float型）
console.log("parseFloat部分：");
console.log(parseFloat("10.11"));
console.log(parseFloat("20.1 23.9"));
// 如果无法转换为数值，则返回 NaN (Not a Number)。
console.log(parseFloat("years 23.9"));

