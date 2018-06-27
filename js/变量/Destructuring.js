// let [a, b, c] = [1, 2, 3];
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// let [ , , third] = ["foo", "bar", "baz"];
// let [head, ...tail] = [1, 2, 3, 4];

/*
* 不完全解构
* */
// let [x, y] = [1, 2, 3];
// x // 1
// y // 2
//
// let [a, [b], d] = [1, [2, 3], 4];
// a // 1
// b // 2
// d // 4

/*
* 具有 Iterator 接口，都可以采用数组形式的解构赋值
* */
// let [x, y, z] = new Set(['a', 'b', 'c']);
//
//
// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }
//
// let [first, second, third, fourth, fifth, sixth] = fibs();
// sixth // 5

/*
* 默认值
* */
// let [foo = true] = [];
// foo // true
//
// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

/*
*只有当一个数组成员严格等于undefined，默认值才会生效。
* */
// let [x = 1] = [undefined];
// x // 1
//
// let [x = 1] = [null];
// x // null

/*
* 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
* */
// function f() {
//     console.log('aaa');
// }
//
// let [x = f()] = [1];

/*
* 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
* */
// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError: y is not defined

/*
* 对象的解构赋值
* */
// let { foo, bar } = { foo: "aaa", bar: "bbb" };
// foo // "aaa"
// bar // "bbb"

/*
* 如果变量名与属性名不一致，必须写成下面这样
* */
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// baz // "aaa"
//
// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;
// f // 'hello'
// l // 'world'


/*
* 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
* */
// let { foo: baz } = { foo: "aaa", bar: "bbb" };
// baz // "aaa"
// foo // error: foo is not defined

/*
* 字符串的解构赋值
* */
// const [a, b, c, d, e] = 'hello';
// a // "h"
// b // "e"
// c // "l"
// d // "l"
// e // "o"

/*
* 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
* */
// let {length : len} = 'hello';
// len // 5

/*
* 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
* */
// let {toString: s} = 123;
// s === Number.prototype.toString // true
//
// let {toString: s} = true;
// s === Boolean.prototype.toString // true