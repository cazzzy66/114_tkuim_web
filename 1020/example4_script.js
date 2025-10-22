// example4_script.js
// 判斷輸入數字是否為奇數或偶數

// 額外示範 switch（1、2、3 對應文字）
var choice = prompt('輸入 1/2/3 試試 switch：');
switch (choice) {
  case '1':
    msg += '\n你輸入了 1';
    break;
  case '2':
    msg += '\n你輸入了 2';
    break;
  case '3':
    msg += '\n你輸入了 3';
    break;
  default:
    msg += '\n非 1/2/3';
}

var input = prompt('請輸入分數（0–100）：');
var score = parseFloat(input);
var msg = '';

if (isNaN(score) || score < 0 || score > 100) {
  msg = '請輸入有效的分數（0–100）！';
} else if (score >= 90) {
  msg = '分數：' + score + '，等第：A';
} else if (score >= 80) {
  msg = '分數：' + score + '，等第：B';
} else if (score >= 70) {
  msg = '分數：' + score + '，等第：C';
} else if (score >= 60) {
  msg = '分數：' + score + '，等第：D';
} else {
  msg = '分數：' + score + '，等第：F';
}




document.getElementById('result').textContent = msg;
