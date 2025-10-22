// example2_script.js
// 變數宣告與基本型態操作

var text = '123';              // 字串
var num = 45;                  // 數字
var isPass = true;             // 布林
var emptyValue = null;         // 空值
var notAssigned;               // undefined（尚未指定）

// 型態檢查
var lines = '';
lines += 'text = ' + text + '，typeof: ' + (typeof text) + '\n';
lines += 'num = ' + num + '，typeof: ' + (typeof num) + '\n';
lines += 'isPass = ' + isPass + '，typeof: ' + (typeof isPass) + '\n';
lines += 'emptyValue = ' + emptyValue + '，typeof: ' + (typeof emptyValue) + '\n';
lines += 'notAssigned = ' + notAssigned + '，typeof: ' + (typeof notAssigned) + '\n\n';

// 轉型
var textToNumber = parseInt(text, 10); // 將 '123' → 123
lines += 'parseInt(\'123\') = ' + textToNumber + '\n';
lines += 'String(45) = ' + String(num) + '\n';

var input1 = prompt('請輸入第一個數字：');
var input2 = prompt('請輸入第二個數字：');

// 轉成數字
var n1 = Number(input1);
var n2 = Number(input2);

// 計算相加結果
var sum = n1 + n2;

// 輸出結果
lines += '你輸入的兩個數字為：' + n1 + ' 與 ' + n2 + '\n';
lines += '相加結果：' + sum + '\n';

// 顯示在頁面上
document.getElementById('result').textContent = lines;
