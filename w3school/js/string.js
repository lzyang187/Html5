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

console.log("indexOf(\"故乡\") = " + x.indexOf("故乡"));
// 第二个参数是检索的起始位置
console.log('indexOf("故乡", 10) = ' + x.indexOf("故乡", 10));
// 这里注意转义字符的长度
console.log('lastIndexOf("中国") = ' + x.lastIndexOf("中国"));
// lastIndexOf() 方法向前进行检索（从尾到头），这意味着：假如第二个参数是 50，则从位置 50 开始检索，直到字符串的起点。
console.log('lastIndexOf("中国", 10) = ' + x.lastIndexOf("中国", 10));
// 与indexOf的区别：search()方法无法设置第二个开始位置参数；indexOf() 方法无法设置更强大的搜索值（正则表达式）。
console.log('search("瓷器") = ' + x.search("瓷器"));

/* substring系列 */

str = "Apple, Banana, Mango";
console.log('slice(7, 13) = ' + str.slice(7, 13));
// 参数为负，则从字符串的结尾开始计数。
console.log('slice(-13, -7) = ' + str.slice(-13, -7));
console.log(str.slice(7));
// substring与slice类似，但是不能接受参数为负
console.log('substring(7, 13) = ' + str.substring(7, 13));
// substr第二个参数规定被提取部分的长度。
console.log('substr(7, 2) = ' + str.substr(7, 2));

/* replace系列 */

// replace() 方法不会改变调用它的字符串。它返回的是新字符串。
console.log(str.replace("Banana", "pear"));

console.log("转换为大写：" + str.toUpperCase());
console.log("转换为小写" + str.toLowerCase());

var hello = "hello";
var world = "，world";
// 方法可用于代替加运算符。
console.log('hello.concat(world) = ' + hello.concat(world));

/* charAt()系列 */
console.log('hello.charAt(1) = ' + hello.charAt(1));
// 返回字符串中指定索引的字符 unicode 编码
console.log('hello.charCodeAt(1) = ' + hello.charCodeAt(1));

// 通过 split() 将字符串转换为数组：
var arr = "a,b,c,d";
console.log(arr.split(","));