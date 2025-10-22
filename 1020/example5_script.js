// example5_script.js
// 以巢狀 for 產生 1~9 的乘法表

var start = prompt('請輸入起始的乘數（例如 2）：');
var end = prompt('請輸入結束的乘數（例如 5）：');

// 轉成數字
var s = parseInt(start, 10);
var e = parseInt(end, 10);

var output = '【顯示 ' + s + ' 到 ' + e + ' 的乘法表】\n\n';

// 檢查輸入是否有效
if (isNaN(s) || isNaN(e) || s < 1 || e > 9 || s > e) {
  output = '請輸入有效的範圍（1～9 且起始值 ≤ 結束值）';
} else {
  for (var i = s; i <= e; i++) {
    for (var j = 1; j <= 9; j++) {
      output += i + 'x' + j + '=' + (i * j) + '\t';
    }
    output += '\n';
  }
}

document.getElementById('result').textContent = output;