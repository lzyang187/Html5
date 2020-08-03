var str = "中国是瓷器的故乡，因此china与China同名";
var len = str.length;
console.log("len = " + len);

// 特殊字符需要转义
var x = "中国是瓷器的故乡，因此china与\"China（中国）\"同名。";
console.log(x);

/*      代码	结果	描述
        \'	'	单引号
        \"	"	双引号
        \\	\	反斜杠 */

/* indexOf系列 */

console.log(x.indexOf("故乡"));
// 第二个参数是检索的起始位置
console.log(x.indexOf("故乡", 10));
// 这里主义转义字符的长度
console.log(x.lastIndexOf("中国"));
// lastIndexOf() 方法向后进行检索（从尾到头），这意味着：假如第二个参数是 50，则从位置 50 开始检索，直到字符串的起点。
console.log(x.lastIndexOf("中国", 10));
// 与indexOf的区别：search()方法无法设置第二个开始位置参数；indexOf() 方法无法设置更强大的搜索值（正则表达式）。
console.log(x.search("瓷器"));

/* substring系列 */

str = "Apple, Banana, Mango";
console.log(str.slice(7, 13));
// 参数为负，则从字符串的结尾开始计数。
console.log(str.slice(-13, -7));
console.log(str.slice(7));
// substring与slice类似，但是不能接受参数为负
console.log(str.substring(7, 13));
// 第二个参数规定被提取部分的长度。
console.log(str.substr(7, 2));

/* replace系列 */

// replace() 方法不会改变调用它的字符串。它返回的是新字符串。
console.log(str.replace("Banana", "pear"));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

var hello = "hello";
var world = "，world";
// 方法可用于代替加运算符。
console.log(hello.concat(world));

/* charAt()系列 */
console.log(hello.charAt(1));
// 返回字符串中指定索引的字符 unicode 编码
console.log(hello.charCodeAt(1));

// 通过 split() 将字符串转换为数组：
var arr = "a,b,c,d";
console.log(arr.split(","));






