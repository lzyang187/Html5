var myArr1 = [0, 1, 2, 3, 4];
var myArr2 = [5, 6, 7];
var concatArr = myArr1.concat(myArr2);
console.log(concatArr);
var joinStr = myArr1.join("-");
console.log(joinStr);
var reverseArr = myArr1.reverse();
console.log(reverseArr);
var sliceArr = myArr1.slice(1, 3);
console.log(sliceArr);

function sortFun(a, b) {
    //如果a>=b，返回大于等于1，则a排在b后面
    return a - b;
}

var intArr = new Array(5, 20, 16, 80, 50);
var sortArr = intArr.sort(sortFun);
console.log(sortArr);

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
