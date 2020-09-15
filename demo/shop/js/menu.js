function init() {
    var menuBox = document.querySelector(".menu-box");
    var lis = menuBox.getElementsByTagName("li");
    var i = 0;
    var len = lis.length;
    for (i = 0; i < len; i++) {
        var el = lis[i];
        var subMenus = document.getElementsByClassName("sub-menu");
        var subMenu = subMenus[i];
        changeMouse(el, subMenu);
    }
}

init();

function changeMouse(li, obj) {
    console.log("执行添加鼠标事件" + obj);
    li.onmouseover = function () {
        console.log("执行显示");
        obj.style.display = "block";
    };
    li.onmouseout = function () {
        console.log("执行隐藏");
        obj.style.display = "none";
    };
}