var jsonStr = '{"a":1, "b":"111", "c":["a","b"]}';
// parse 将 json字符串转换为object
var jsonObj = JSON.parse(jsonStr);
console.log("string转换为object" + jsonObj.c[1]);
// 将object转换为json字符串
var myJson = JSON.stringify(jsonObj);
console.log("将object转换为string：" + myJson);

jsonStr = '["a", 2, "c"]';
var array = JSON.parse(jsonStr);
// 解析数组json得到的是数组
console.log("json转换为数组：" + array[1]);
console.log(JSON.stringify(array));

// 针对日期特殊解析的场景
var text = '{"name":"Bill Gates", "birth":"1955-10-28", "city":"Seattle"}';
// 使用 JSON.parse() 函数的第二个参数，被称为 reviver，在返回值之前，它会检查每个属性。
var obj = JSON.parse(text, function (key, value) {
    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }
});
console.log(obj.birth);