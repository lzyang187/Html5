var date = new Date();
console.log("当前时间：" + date);
console.log("转化为UTC格式：" + date.toUTCString());
console.log("转化为Date格式：" + date.toDateString());

//返回星期的索引，0是周日
var weekIndex = date.getDay();
var Week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
console.log(Week[weekIndex]);
var year = date.getFullYear();
// JavaScript 从 0 到 11 计算月份。一月是 0。十二月是11。
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
// getTime() 方法返回自 1970 年 1 月 1 日以来的毫秒数
var time = date.getTime();
var utcHours = date.getUTCHours();
console.log("年：" + year + " 月：" + month + " 日：" + day + " 时：" + hour + " 分：" + minute + " 秒：" + second + " 系统时间：" + time + " 全球标准时间：" + utcHours);

date.setFullYear("2008");
console.log("修改年份后：" + date);
