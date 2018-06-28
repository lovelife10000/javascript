var Single = (function(){
    var instance;
    function init() {
        //define private methods and properties
        //do something
        return {
            //define public methods and properties
        };
    }

    return {
        // 获取实例
        getInstance:function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
})();

var obj1 = Single.getInstance();
var obj2 = Single.getInstance();

console.log(obj1 === obj2);

