var date = new Date();
console.log("当前时间：" + date);
// date.setFullYear("2008");
// console.log("修改年份后：" + date);
//返回星期的索引，0是周日
var weekIndex = date.getDay();
var Week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
console.log(Week[weekIndex]);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var time = date.getTime();
var utcHours = date.getUTCHours();
console.log("年：" + year + " 月：" + month + " 日：" + day + " 时：" + hour + " 分：" + minute + " 秒：" + second + " 系统时间：" + time + " 全球标准时间：" + utcHours);


