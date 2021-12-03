var PassSec;   // 秒数カウント用変数
 
window.onload = function(){
   document.getElementById("restartcount").disabled = true;
   document.getElementById("resetcount").disabled = true;
   document.getElementById("stopcount").disabled = true;
}

// 繰り返し処理の中身
function showPassage() {
   PassSec++;
   var msg = "ボタンを押してから " + PassSec + "秒が経過しました。";
   document.getElementById("PassageArea").innerHTML = msg;
}
 
// 繰り返し処理の開始
function startTimer() {
   PassSec=0;
   PassageID = setInterval('showPassage()',1000);
   document.getElementById("startcount").disabled = true;
   document.getElementById("resetcount").disabled = false;
   document.getElementById("stopcount").disabled = false;
}

function restartTimer() {
   PassageID = setInterval('showPassage()',1000);
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
   var msg = "ボタンを押してから " + 0 + "秒が経過しました。";
   document.getElementById("PassageArea").innerHTML = msg;
   
   document.getElementById("startcount").disabled = false;
   document.getElementById("stopcount").disabled = true;
   document.getElementById("restartcount").disabled = true;
   document.getElementById("resetcount").disabled = true;
}

function SetWorkTime(){
   const hour = document.getElementById("workhour")
   const minute = document.getElementById("workminute")
   const hour_value = hour.value
   const minute_value = minute.value
   console.log(hour_value + "時間" + minute_value +"分");
}
