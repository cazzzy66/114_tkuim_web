// guess_number.js
// 猜數字遊戲

var answer = Math.floor(Math.random() * 100) + 1;
var count = 0;
var guess;
var msg = '猜數字遊戲開始！（1～100）\n';

do {
  guess = prompt('請輸入你的猜測（1～100）：');
  if (guess === null) {
    msg += '\n遊戲已取消。';
    break;
  }
  var num = parseInt(guess, 10);
  if (isNaN(num) || num < 1 || num > 100) {
    alert('請輸入 1 到 100 之間的整數！');
    continue;
  }
  count++;
  if (num === answer) {
    msg += '恭喜猜中！答案是 ' + answer + '\n';
    msg += '你總共猜了 ' + count + ' 次。';
    alert('恭喜答對！共猜了 ' + count + ' 次！');
    break;
  } else if (num < answer) {
    alert('再大一點！');
  } else {
    alert('再小一點！');
  }
} while (true);

document.getElementById('result').textContent = msg;
