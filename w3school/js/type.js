// JavaScript 字符串类型
// 您可以在字符串内使用引号，只要这些引号与包围字符串的引号不匹配：
var answer = "It's alright"; // 双引号内的单引号
console.log(answer);
answer = "He is called 'Bill'"; // 双引号内的单引号
console.log(answer);
answer = 'He is called "Bill"'; // 单引号内的双引号
console.log(answer);

// typeof 运算符返回变量或表达式的类型
console.log(typeof "tom");
console.log(typeof 10);
var x;
console.log(typeof x);
console.log(typeof true);
console.log(typeof { name: "tom", age: 18 });
// 数组返回为 "object"，因为在 JavaScript 中数组即对象。
console.log(typeof [1, 2, 3]);
// 方法返回的是function
console.log(typeof function myFun() { });
// Null：在 JavaScript 中，null 是 "nothing"。它被看做不存在的事物。不幸的是，在 JavaScript 中，null 的数据类型是object。
// 您可以把 null 在 JavaScript 中是对象理解为一个 bug。它本应是 null。
var y = null;
console.log(typeof y);

// Undefined 与 null 的值相等，但类型不相等：
// null === undefined // false
// null == undefined // true
console.log((x === y));
console.log((x == y));