/*
* Set里面的每个值都是唯一的
* 实例方法add()添加值
* 实例属性包含size/[[Entries]]
* */
// let b = new Set();
// [2, 3, 5, 4, 5, 2, 2].forEach(x => b.add(x));
// for (let i of b) {
//     console.log(i);
// }
// console.dir(b)

/*
* 可以通过...展开为序列
* 接收数组作为参数
* 可接收类数组对象作为参数
* */
// let b = new Set([1, 2, 3, 4, 4]);
// let c = new Set({});
//
// console.dir([...b])
// console.dir(c)


/*
* 迭代器结构
* */
// let set = new Set(['red', 'green', 'blue']);
// for (let item of set.keys()) {
//     console.log(item);
// }
// // red
// // green
// // blue
// for (let item of set.values()) {
//     console.log(item);
// }
// // red
// // green
// // blue
// for (let item of set.entries()) {
//     console.log(item);
// }
// // ["red", "red"]
// // ["green", "green"]
// // ["blue", "blue"]

/*
*Set运用
* */
// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);
// // 并集
// let union = new Set([...a, ...b]);
// // Set {1, 2, 3, 4}
// // 交集
// let intersect = new Set([...a].filter(x => b.has(x)));
// // set {2, 3}
// // 差集
// let difference = new Set([...a].filter(x => !b.has(x)));
// // Set {1}