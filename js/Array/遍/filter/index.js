const arr=[1,'a','%']
var arr2=arr.filter(function (item,index,arr) {
    console.log(item,index,arr)
    return typeof item ==='number';//返回一个条件

});//不会修改原数组
console.log(arr)
console.log(arr2)