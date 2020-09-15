// 文档的 body
// alert(document.body.innerHTML);
// 完整文档
// alert(document.documentElement.innerHTML);

window.onload = function () {
    
    var body = document.getElementsByTagName("body")[0];
    // for (var i = 0; i < body.childNodes.length; i++) {
    //     console.log("第" + i + "个节点的nodeName：" + body.childNodes[i].nodeName + " nodeValue：" + body.childNodes[i].nodeValue + " nodeType：" + body.childNodes[i].nodeType);
    // }
    console.log(body.childNodes);

    // HTMLCollection 对象是 HTML 元素列表（也许看起来像数组，但并非数组），虽然可以使用数字索引，但是无法使用数组方法（如push、join等）
    console.log(body.children);
    node();
};

function node() {
    var p1 = document.getElementById("p1id");
    var h1 = document.getElementById("h1id");
    // 将段落显示为标题的文本
    p1.firstChild.nodeValue = h1.childNodes[0].nodeValue;

    /* nodeName 属性规定节点的名称。
    nodeName 是只读的
    元素节点的 nodeName 等同于标签名
    属性节点的 nodeName 是属性名称
    文本节点的 nodeName 总是 #text
    文档节点的 nodeName 总是 #document */

    // p1的父节点的节点名称
    console.log("p1的节点名称：" + p1.nodeName);
    console.log("p1的父节点的节点名称：" + p1.parentNode.nodeName);
    console.log("p1的前一个兄弟的节点名称：" + p1.previousSibling.nodeName);
    console.log("p1的后一个兄弟的节点名称：" + p1.nextSibling.nodeName);

    /* nodeValue 属性规定节点的值。
    元素节点的 nodeValue 是 undefined
    文本节点的 nodeValue 是文本
    属性节点的 nodeValue 是属性值 */

    /* nodeType 属性返回节点的类型。nodeType 是只读的。
    节点	       类型  例子
    ELEMENT_NODE	1	<h1 class="heading">W3School</h1>
    ATTRIBUTE_NODE	2	class = "heading" （弃用）
    TEXT_NODE	    3	W3School
    COMMENT_NODE	8	<!-- 这是注释 -->
    DOCUMENT_NODE	9	HTML 文档本身（<html> 的父）
    DOCUMENT_TYPE_NODE	10	<!Doctype html> */
}