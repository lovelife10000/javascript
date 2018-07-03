const arr=[1,'a','%','2','b']
console.log(arr.slice());
console.log(arr.slice(-1));
console.log(arr.slice(-1,3));//负值只能有一个参数，加了第二个参数，则截取不到任何值
console.log(arr.slice(-2));
console.log(arr.slice(0));
console.log(arr.slice(0,1));
console.log(arr.slice(1,3));//第二个参数是序号，截取不包括第二个参数的序号的元素
console.log(arr);