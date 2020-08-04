// 创建对象
var person = {
    name: "tom",
    age: 18,
    // 定义对象中的方法
    info: function () {
        // this 的值，在函数中使用时，是“拥有”该函数的对象。
        return this.name + " " + this.age;
    }
};

// 调用对象中的方法
console.log(person.info());
// 不加()则返回函数的定义
console.log(person.info);

// 通过简单的赋值，向已存在的对象添加新属性。
person.weight = 50;

// delete 关键词从对象中删除属性：
delete person.weight;

// for in 进行遍历
var index;
for (index in person) {
    console.log(index + " " + person[index]);
}

var x = person;
// 对 x 的任何改变都将改变 person，因为 x 和 person 是相同的对象
// JavaScript 变量不是易变的。只有 JavaScript 对象如此
x.age = 20;
console.log("修改后的年龄" + person.age);


/* 为什么使用 Getter 和 Setter？
它提供了更简洁的语法
它允许属性和方法的语法相同
它可以确保更好的数据质量
有利于后台工作 */
var counter = {
    count: 0,
    set reset(value = 0) {
        this.count = value;
    },
    get increment() {
        this.count++;
    },
    get decrement() {
        this.count--;
    },
    get countValue() {
        return this.count;
    }
}

counter.reset;
counter.increment;
counter.increment;
counter.decrement;
console.log("计数器的值：" + counter.countValue);


// 对象构造器
function Boy(name, age) {
    this.name = name;
    this.age = age;
    // 为构造器添加方法
    this.changeName = function (newName) {
        this.name = newName;
    };
}

var tom = new Boy("tom", 18);
var lbj = new Boy("lbj", 45);
lbj.changeName("james");
console.log("构造器构造的boy：" + lbj.name);

// 向tom中添加方法
tom.info = function () {
    return this.name + " " + this.age;
}
console.log("添加的方法：" + tom.info());


// 对象原型：JavaScript prototype 属性允许您为对象构造器添加新属性和新方法
Boy.prototype.county = "China";
Boy.prototype.showFun = function () {
    return this.name + " " + this.county;
}
console.log("prototype：" + tom.showFun());
