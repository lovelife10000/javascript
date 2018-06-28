/*
* es5实现
* */
// // 创建对象
// var targetObj = {
//     age: 1
// }
// // 定义值改变时的处理函数
// function observer(oldVal, newVal) {
//     // 其他处理逻辑...
//     console.info('name属性的值从 '+ oldVal +' 改变为 ' + newVal);
// }
//
// // 定义name属性及其set和get方法
// Object.defineProperty(targetObj, 'name', {
//     enumerable: true,
//     configurable: true,
//     get: function() {
//         console.log(name)
//         debugger
//         return name;
//     },
//     set: function(val) {
//         //调用处理函数
//         console.log(name)
//         debugger
//         observer(name, val)
//         name = val;
//     }
// });
// debugger
// targetObj.name = 'Martin';
// debugger
// targetObj.name = 'Lucas';
// console.info('targetObj:', targetObj)

/*
* es6实现
* */
// class TargetObj {
//     constructor(age, name) {
//         debugger
//         this.name = name;
//         this.age = age;
//     }
//     set name(val) {
//         console.log(name)
//         debugger
//         observer(name, val);
//         name = val;
//     }
// }
// debugger
// let targetObj = new TargetObj(1, 'Martin');
// debugger
// // 定义值改变时的处理函数
// function observer(oldVal, newVal) {
//     // 其他处理逻辑...
//     debugger
//     console.info('name属性的值从 '+ oldVal +' 改变为 ' + newVal);
// }
// debugger
// targetObj.name = 'Lucas';
// targetObj.name = 'Lucas2';
// console.info(targetObj)


/*
* Reflect和Proxy实现
* */
// class TargetObj {
//     constructor(age, name) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// let targetObj = new TargetObj(1, 'Martin');
//
// let observerProxy = new Proxy(targetObj, {
//     set(target, property, value, reciever) {
//         if (property === 'name') {
//             observer(target[property], value);
//         }
//
//         Reflect.set(target, property, value, reciever);
//     }
// });
// // 定义值改变时的处理函数
// function observer(oldVal, newVal) {
//     // 其他处理逻辑...
//     console.info(`name属性的值从 ${oldVal} 改变为 ${newVal}`);
// }
//
// observerProxy.name = 'Lucas';
// console.info(targetObj);