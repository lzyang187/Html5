var myArr1 = [0, 1, 2, 3, 4];
var myArr2 = [5, 6, 7];

// push() 方法（在数组结尾处）向数组添加一个新的元素：
var newLen = myArr1.push(999);
console.log("push后的新长度：" + newLen);
// length 属性提供了向数组追加新元素的简易方法：
myArr1[myArr1.length] = 1000;
// toString() 把数组转换为数组值（逗号分隔）的字符串
console.log(myArr1.toString());
// pop() 方法返回“被弹出”的值
var pop = myArr1.pop();
console.log("pop的值：" + pop);

// concat() 方法通过合并（连接）现有数组来创建一个新数组
var concatArr = myArr1.concat(myArr2);
console.log(concatArr);

// join() 方法也可将所有数组元素结合为一个字符串。
var joinStr = myArr1.join("-");
console.log(joinStr);

var reverseArr = myArr1.reverse();
console.log("反转后的数组：" + reverseArr);

// 从开始参数选取元素，直到结束参数（不包括）为止
var sliceArr = reverseArr.slice(1, 3);
console.log("裁剪后的数组：" + sliceArr);
sliceArr = reverseArr.slice(1)
console.log("裁剪后的数组：" + sliceArr);

var myArr3 = ["a", "b", "c", "d", "e"];
// splice的第一个参数（2）定义了应添加新元素的位置（拼接）。第二个参数（0）定义应删除多少元素。其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。
// splice() 方法返回一个包含已删除项的数组：
var removeArray = myArr3.splice(1, 2, "x", "y", "z");
console.log("被移除的数组：" + removeArray);
console.log("移除操作后的数组：" + myArr3);
// splice通过聪明的参数设定，可以用来移除元素
myArr3.splice(1, 1)
console.log(myArr3);

var intArr = new Array(5, 20, 16, 80, 50);
// 查找数组的最大值和最小值
console.log("最大值是" + Math.max.apply(null, intArr));
console.log("最小值是" + Math.min.apply(null, intArr));

// 对数组进行排序
var sortArr = intArr.sort(sortFun);
console.log(sortArr);

function sortFun(a, b) {
    //如果a>=b，返回大于等于1，则a排在b后面
    return a - b;
}

//根据字符串计算平均分
var originStr = "小明:87; 小花:81; 小红:97; 小天:76;小张:74;小小:94;小西:90;小伍:76;小迪:64;小曼:76";
var studentArr = originStr.split(";");
var studentCount = studentArr.length;
var allScore = 0;
for (var i = 0; i < studentCount; i++) {
    var student = studentArr[i].split(":");
    var score = parseInt(student[1]);
    allScore += score;
}
var average = Math.round(allScore / studentCount);

var date = new Date();
var Week = ["星期日", "星期1", "星期2", "星期3", "星期4", "星期5", "星期6"];
console.log(date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + Week[date.getDay()] + "--班级平均分为：" + average);
