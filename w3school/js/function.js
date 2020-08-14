console.log("函数的参数列表长度：" + myFun(1, 2, 3));
console.log("函数的toString()：" + myFun.toString());
console.log("函数的声明：" + myFun);

// Hoisting 应用于变量声明和函数声明，所以在声明函数之前就可以调用
function myFun(a, b) {
    // 返回传入的实参个数
    return arguments.length;
}

/*
JavaScript 函数定义不会为参数（parameter）规定数据类型。
JavaScript 函数不会对所传递的参数（argument）实行类型检查。
JavaScript 函数不会检查所接收参数（argument）的数量。 */

/*
js的参数是值传递的：函数中改变了参数的值不会影响该参数的原始值；
如果参数是对象的话，则是引用传递的：如果函数改变了对象属性，它也改变了原始值 */

function sum() {
    // arguments 对象包含函数调用时使用的参数数组。参数太多（超过声明）时，则可以使用 arguments 对象来使用这些参数。
    var len = arguments.length;
    var i = 0;
    var sum = 0;
    for (i = 0; i < len; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log("总和：" + sum(1, 2, 3, 4, 5, 6));


/* 自调用函数：函数表达式会自动执行，假如表达式后面跟着 () */
(function self() {
    console.log("我是自调用函数，会自动被调用");
})();


var person = {
    firstName: "tom",
    lastName: "james",
    fullName: function (city) {
        return this.firstName + this.lastName + city;
    }
};

var person1 = {
    firstName: "jerry",
    lastName: ",james"
};

/* 
call() 方法是预定义的 JavaScript 方法。
它可以用来调用所有者对象作为参数的方法。
通过 call()，您能够使用属于另一个对象的方法。 */
console.log(person.fullName.call(person1, ",hefei"));

/*
apply() 方法与 call() 方法非常相似

不同之处是：
call() 方法分别接受参数。
apply() 方法接受数组形式的参数。
如果要使用数组而不是参数列表，则 apply() 方法非常方便。 */
// 第一个参数（null）无关紧要。在本例中未使用它。
console.log(Math.max.apply(null, [1, 2, 3]));


/*
JavaScript 闭包：https://www.w3school.com.cn/js/js_function_closures.asp
闭包指的是有权访问父作用域的函数，即使在父函数关闭之后。 */
var add = (function () {
    // 这个自调用函数只运行一次。它设置counter为零（0），并返回函数表达式。
    var counter = 0;
    return function () {
        // 最“精彩的”部分是它能够访问父作用域中的counter。
        return counter += 1;
    };
})();
// counter被这个匿名函数(add)的作用域保护，并且只能使用 add 函数来修改。
add();
add();
console.log("闭包函数的结果：" + add());