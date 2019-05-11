function back(){
    window.location.href="index.html"
}
var code = [];
window.addEventListener("keydown" , checkKeyPress,false);
function checkKeyPress(val){
if(val.keyCode){
window.location.href="show.html"
localStorage.setItem("keycode" , JSON.stringify(val.keyCode))
localStorage.setItem("keyname" , JSON.stringify(val.key))
localStorage.setItem("eventcode" , JSON.stringify(val.code))
localStorage.setItem("location" , JSON.stringify(val.location))
}
}
var localData1 =localStorage.getItem("keycode",JSON.stringify(localData1));
var localData2 =localStorage.getItem("keyname",JSON.stringify(localData2));
var localData3 =localStorage.getItem("eventcode",JSON.stringify(localData3));
var localData4 =localStorage.getItem("location",JSON.stringify(localData4));
document.getElementById("shownum").innerHTML=localData1;
document.getElementById("div3").innerHTML=localData1;
document.getElementById("div1").innerHTML=localData2;
document.getElementById("div4").innerHTML=localData3;
document.getElementById("div2").innerHTML=localData4;



