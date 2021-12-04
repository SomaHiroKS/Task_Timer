var PassHour;   // 秒数カウント用変数
var PassMin;   // 秒数カウント用変数
var PassSec;   // 秒数カウント用変数
var PassSumSec;
 
window.onload = function(){
   document.getElementById("restartcount").disabled = true;
   document.getElementById("resetcount").disabled = true;
   document.getElementById("stopcount").disabled = true;
}

// 繰り返し処理の中身
function countdown() {
   PassSumSec = PassHour * 3600 + PassMin * 60 + PassSec;
   PassSumSec--;
   
   PassHour = Math.floor(PassSumSec / 3600);
   PassMin = Math.floor(PassSumSec / 60)%60;
   PassSec = PassSumSec%60;
   
   document.getElementById("hour").textContent=String(PassHour).padStart(2,"0"); //一桁になった時0がつくように
   document.getElementById("min").textContent=String(PassMin).padStart(2,"0")
   document.getElementById("sec").textContent=String(PassSec).padStart(2,"0")
}
 
// 繰り返し処理の開始
function startTimer() {
   PassageID = setInterval('countdown()',1000);
   document.getElementById("startcount").disabled = true;
   document.getElementById("resetcount").disabled = false;
   document.getElementById("stopcount").disabled = false;
}

function restartTimer() {
   PassageID = setInterval('countdown()',1000);
   document.getElementById("restartcount").disabled = true;
}
 
// 繰り返し処理の中止
function stopTimer() {
   clearInterval( PassageID );   // タイマーのクリア
   document.getElementById("restartcount").disabled = false;
}

// タイマーリセット
function resetTimer() {
   clearInterval( PassageID );   // タイマーのクリア
   var msg = PassHour + "時間" + PassMin + "分" + PassSec + "秒";
   document.getElementById("PassageArea").innerHTML = msg;
   
   document.getElementById("startcount").disabled = false;
   document.getElementById("stopcount").disabled = true;
   document.getElementById("restartcount").disabled = true;
   document.getElementById("resetcount").disabled = true;
}

function SetWorkTime(){
   const hour = document.getElementById("workhour")
   const minute = document.getElementById("workminute")
   PassHour = hour.value
   PassMin = minute.value
   PassSec = 0;
   PassSumSec = PassHour * 3600 + PassMin * 60 + PassSec;

   document.getElementById("hour").textContent=String(PassHour).padStart(2,"0"); //一桁になった時0がつくように
   document.getElementById("min").textContent=String(PassMin).padStart(2,"0")
   document.getElementById("sec").textContent=String(PassSec).padStart(2,"0")
}
