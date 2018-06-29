if(typeof(Storage)!=="undefined")
{
    localStorage.sitename="菜鸟教程";
    document.getElementById("root").innerHTML="网站名：" + localStorage.sitename;
}
else
{
    document.getElementById("root").innerHTML="对不起，您的浏览器不支持 web 存储。";
}