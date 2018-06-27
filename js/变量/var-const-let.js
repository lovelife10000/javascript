/*
* 不存在变量提升，如果强制提前用，会报错找不到该变量
* 块级作用域
* 允许在块级作用域内声明函数。
* const/let不允许重复声明同一变量，会报错
* 暂时性死区：块级作用域内通过const、let声明的变量自动绑定到该作用域，切断与外界联系
* */
// var tmp = 123;
//
// if(true){
//     tmp = 'abc'; // ReferenceError
//     let tmp;
// }

/*
* i是全局变量，只有一个
* */
// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6](); // 10

/*
* {}内保存每一次循环时的变量i
* */
// var a = [];
// for (let i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6](); // 6

/*
* i在一个独立块级作用域内
* */
// for (let i = 0; i < 3; i++) {
//     let i = 'abc';
//     console.log(i);
// }
// // abc
// // abc
// // abc

/*
* const声明一个只读的常量。一旦声明，常量的值就不能改变。
* */
// const PI = 3.1415;
// PI // 3.1415
//
// PI = 3;