/** 以下是查找类 */

// 通过id查找返回一个元素
var p1 = document.getElementById("p1Id");
p1.append("+通过id查找");

// 通过class查找返回的是多个元素的数组
var classList = document.getElementsByClassName("p1class");
classList[0].append("+通过class查找");

// 通过tag查找返回的是多个元素的数组
var tagList = document.getElementsByTagName("p");
tagList[0].append("+通过tag查找");

// 通过css选择器的语法查找
var selectorList = document.querySelectorAll("p.p1class");
selectorList[0].append("+通过css选择器查找");


/** 以下是修改类 */

document.getElementById("img1").src = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";
p1.style.color = "red";
p1.onclick = showLog;

function showLog() {
    alert("点击了p1");
}

/** 添加或移除事件监听器 */
p1.addEventListener("click", click1);
p1.addEventListener("click", click2);

function click1() {
    alert("点击1");
}

function click2() {
    alert("点击2");
}
p1.removeEventListener("click", click1);


// 添加一个段落
var newP = document.createElement("p");
var newNode = document.createTextNode("这是添加的新段落");
newP.appendChild(newNode);
var body = document.getElementsByTagName("body")[0];
body.appendChild(newP);

// 删除一个元素
body.removeChild(document.getElementById("a1Id"));

// 替换一个元素
// body.replaceChild(newP, p1);