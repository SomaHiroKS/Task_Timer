var PassHour;   // 秒数カウント用変数
var PassMin;   // 秒数カウント用変数
var PassSec;   // 秒数カウント用変数
var PassSumSec;
var BreakHour;
var BreakMin;
var BreakSec;
var BreakSumSec;
var WorkFlag;
var SumSec;
const work_music = new Audio('music/work.mp3');
const break_music = new Audio('music/break.mp3');
 
window.onload = function(){
   document.getElementById("restartcount").disabled = true;
   document.getElementById("resetcount").disabled = true;
   document.getElementById("stopcount").disabled = true;
   WorkFlag = Boolean("true");
   
}

// 繰り返し処理の中身
function countdown() {
   if(WorkFlag){
      SumSec = PassSumSec;
      PassSumSec--;
      break_music.pause();
      work_music.play();
      work_music.volume = 0.01;
      work_music.loop = true;
   }else{
      SumSec = BreakSumSec;
      BreakSumSec--;
      work_music.pause();
      break_music.play();
      break_music.volume = 0.01;
      break_music.loop = true;
   }
   //PassSumSec = PassHour * 3600 + PassMin * 60 + PassSec;
   //PassSumSec--;
   
   var Hour = Math.floor(SumSec / 3600);
   var Min = Math.floor(SumSec / 60)%60;
   var Sec = SumSec%60;
   
   document.getElementById("hour").textContent=String(Hour).padStart(2,"0"); //一桁になった時0がつくように
   document.getElementById("min").textContent=String(Min).padStart(2,"0")
   document.getElementById("sec").textContent=String(Sec).padStart(2,"0")

   SumSec = Hour * 3600 + Min * 60 + Sec;
   
   if(SumSec == 0){
      WorkFlag = !WorkFlag;
      ResetSumSec();
      console.log(PassSumSec +" : " + BreakSumSec);
   }
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

function SetBreakTime(){
   const hour = document.getElementById("breakhour")
   const minute = document.getElementById("breakminute")
   BreakHour = hour.value
   BreakMin = minute.value
   BreakSec = 0;
   BreakSumSec = BreakHour * 3600 + BreakMin * 60 + BreakSec;
}

function ResetSumSec(){
   BreakSumSec = BreakHour * 3600 + BreakMin * 60 + BreakSec;
   PassSumSec = PassHour * 3600 + PassMin * 60 + PassSec;
}
