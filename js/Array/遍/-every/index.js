const arr=[1,'a','%']
var arr2=arr.reduce(function (base,item,index,arr) {
    console.log(base,item,index,arr)
    return base+item;//返回的base的值

},2);//不会修改原数组,返回最后base的值
 console.log(arr)
 console.log(arr2)