var numbers = [45, 4, 9, 16, 25];
// forEach迭代
numbers.forEach(eachFun);

function eachFun(value, index, array) {
    console.log("第" + index + "个元素：" + value);
}

// map，相当于rxjava中的转换
var mapResult = numbers.map(mapFun);

function mapFun(value, index) {
    return value * 2;
}
console.log("map后的数组：" + mapResult);

// filter，用条件进行过滤
var filterResult = numbers.filter(filterFun);

function filterFun(value, index) {
    return value > 16;
}
console.log("filter后的数组：" + filterResult);

// every() 方法检查所有值是否通过测试。
var allOver16 = numbers.every(everyFun);

function everyFun(value, index) {
    return value > 16;
}
console.log("所有元素都大于16吗？" + allOver16);

// some() 方法检查所有值是否通过测试。
var someOver16 = numbers.some(someFun);

function someFun(value, index) {
    return value > 16;
}
console.log("某些元素大于16吗？" + someOver16);

// find() 方法返回通过条件函数的第一个数组元素的值。
var result = numbers.find(findFun);

function findFun(value, index) {
    return value > 16;
}
console.log("第一个大于16的元素是：" + result);

// findIndex() 方法返回通过条件函数的第一个数组元素的索引。
result = numbers.findIndex(findIndexFun);

function findIndexFun(value, index) {
    return value > 16;
}
console.log("第一个大于16的元素索引是：" + result);

// indexOf() 方法在数组中搜索元素值并返回其位置。
console.log("16的位置是：" + numbers.indexOf(16));
// 从3开始查找
console.log("从位置3开始查找4的位置是：" + numbers.indexOf(4, 3));

// lastIndexOf() 方法在数组中搜索元素值并返回最后一个位置。
var fruits = ["Apple", "Apple", "Orange", "Mango"];
console.log("在数组中搜索元素值并返回最后一个位置" + fruits.lastIndexOf("Apple"));