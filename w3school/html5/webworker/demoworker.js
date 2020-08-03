var i = 0;
function timeCount() {
    i = i + 1;

    // 重要的部分是 postMessage() 方法，用于向 HTML 页面传回一段消息
    postMessage(i);
    setTimeout("timeCount()", 500);
}

timeCount();