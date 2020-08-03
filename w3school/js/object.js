// 创建对象
var person = {
    name: "tom",
    age: 18,
    // 定义对象中的方法
    info: function () {
        return this.name + " " + this.age;
    }
};

// 调用对象中的方法
console.log(person.info());
// 不加()则返回函数的定义
console.log(person.info);
