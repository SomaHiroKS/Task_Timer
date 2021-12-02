var PassSec;   // 秒数カウント用変数
 
window.onload = function(){
   document.getElementById("restartcount").disabled = true;
   document.getElementById("resetcount").disabled = true;
   document.getElementById("stopcount").disabled = true;
   console.log("A");
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

function GetTaskName(){
   const textbox = document.getElementById("TaskName")
   const value = textbox.value
}