/*
* 参数变量是默认声明的，所以不能用let或const再次声明
* */
// function foo(x = 5) {
//     let x = 1; // error
//     const x = 2; // error
// }

/*
* 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
* */
// (function (a) {}).length // 1
// (function (a = 5) {}).length // 0
// (function (a, b, c = 5) {}).length // 2

