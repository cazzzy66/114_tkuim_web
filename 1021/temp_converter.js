// temp_converter.js
// 溫度轉換器：攝氏 ↔ 華氏

var tempStr = prompt('請輸入溫度數值：');
var unit = prompt('請輸入單位（C 或 F）：');

var temp = parseFloat(tempStr);
var result = '';

if (isNaN(temp) || !unit) {
  result = '輸入有誤！請輸入數字與單位（C 或 F）';
} else {
  unit = unit.toUpperCase();
  if (unit === 'C') {
    var f = temp * 9 / 5 + 32;
    result = temp + '°C = ' + f.toFixed(2) + '°F';
  } else if (unit === 'F') {
    var c = (temp - 32) * 5 / 9;
    result = temp + '°F = ' + c.toFixed(2) + '°C';
  } else {
    result = '單位只能輸入 C 或 F';
  }
}

alert(result);
document.getElementById('result').textContent = result;
