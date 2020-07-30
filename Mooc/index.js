console.log("哈哈哈");
// alert("hello");
/* var like = confirm("你喜欢现在的生活吗？");
if (like == true) {
    alert("很好，加油！");
} else {
    alert("是时候做些改变了！");
} */

// var name = prompt("请输入你的姓名", "姓名是什么");
// if (name == null) {
//     alert("你好，陌生人");
// } else {
//     alert("你好，" + name);
// }

// var win = window.open("https://www.baidu.com", "_blank");
// win.close();

var p1 = document.getElementById("p1");
alert("读取到的p1的结果：" + p1.innerHTML);
p1.innerHTML = "修改后的段落1的内容";
p1.style.color = "blue";

function toogleP1() {
    var p1 = document.getElementById("p1");
    if (p1.style.display == "none") {
        p1.style.display = "block";
    } else {
        p1.style.display = "none";
    }
}

function modifyP1ClassName() {
    var p1 = document.getElementById("p1");
    p1.className = "modifyP1";
}
