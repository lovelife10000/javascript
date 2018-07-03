let promise = new Promise(function (resolve, reject) {

    resolve('666');
    //reject('777')//如果这个函数的参数是另一个promise实例，只有等到该promise状态为resolved或者rejected才会开始执行该reject函数
    console.log('这里还会执行，即使前面已经状态改为rejected或者resolved')
});

promise.then(function (result) {
    console.log(result);
    return 888
}).then(function (result) {
    throw ('这里发生错误，catch也能捕捉到')
    console.log(result);
}).catch(function (err) {
    debugger
    console.log(err)
})

//resolve和reject在函数最后执行，所以一般加上return resolve()
//建议采用链式写法，不然会报错 ，reject写在最后
//resolve和reject都是放到队列尾部去执行，也就是所有同步代码都执行完毕后再执行这个代码



