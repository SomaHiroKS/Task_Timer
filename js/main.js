var PassSec;   // 秒数カウント用変数
 
// 繰り返し処理の中身
function showPassage() {
   PassSec++;
   var msg = "ボタンを押してから " + PassSec + "秒が経過しました。";
   document.getElementById("PassageArea").innerHTML = msg;
}
 
// 繰り返し処理の開始
function startShowing() {
   PassSec = 0;   // カウンタのリセット
   PassageID = setInterval('showPassage()',1000);
   document.getElementById("startcount").disabled = true;
}
 
// 繰り返し処理の中止
function stopShowing() {
   clearInterval( PassageID );   // タイマーのクリア
   document.getElementById("startcount").disabled = false;
}