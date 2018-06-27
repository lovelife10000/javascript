/*
* 类似object，但是任何值都可作为键
* */
// const m = new Map();
// const o = {p: 'Hello World'};
//
// m.set(o, 'content')
// m.get(o) // "content"

/*
*接收数组作为参数，数组里的元素也是数组的话
* */
// const map = new Map([
//     ['name', '张三'],
//     ['title', 'Author']
// ]);
//
// map.size // 2
// map.has('name') // true
// map.get('name') // "张三"
// map.has('title') // true
// map.get('title') // "Author"

/*
* 接收数组作为参数，数组里的元素也是数组的话,第一个元素就是键，第二个元素就是值，第三个元素被忽略了
* */
// const map = new Map([
//     ['name'],
//     ['title', 'Author','y']
// ]);
//
// map.size // 2
// map.has('name') // true
// console.log(map.get('name')) // "张三"
// map.has('title') // true
// console.log(map.get('title')) // "Author"

/*
* 表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此get方法无法读取该键，返回undefined
* */
// const map = new Map();
// map.set(['a'], 555);
// map.get(['a']) // undefined
//
// const b=['a']
// map.set(b,666)
// console.log(map.get(b))//666