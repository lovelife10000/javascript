const f = async function () {
    // try {
        const a = await new Promise(function (resolve, reject) {
            console.log(1)
            throw ('出错了')
            resolve('666')
        });
        const b = await  new Promise(function (resolve, reject) {
            console.log(2)
            resolve('777')
        });
    // } catch (e) {
    //
    // }


    console.log(3)
}

const result = f();
result.then(function (info) {
    debugger
    console.log(info)
}).catch(function (err) {
    debugger
    console.log(er)
})
console.log(Object.getPrototypeOf(result))//返回值是promise

//await后面一般是一个promise，如果不是，则会被转成promise
//如果需要前一个异步操作失败，后一个异步操作还能继续下去可以给前一个异步操作try catch，另一种是前一个promise跟一个.catch()处理它自己的错误

//如果要每个异步操作不互相依赖，可以将await后面的东西封装成一个函数，一开始执行这个函数，然后用变量代替这个函数的执行写在await后面