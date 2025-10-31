// signup_form.js
const form = document.getElementById('signup-form');
const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('form-success');
const interests = document.getElementById('interests');

function showError(input, message) {
  const error = document.getElementById(`${input.id}-error`);
  input.setCustomValidity(message || '');
  error.textContent = message || '';
  input.reportValidity();
}

// 通用驗證邏輯
function validateInput(input) {
  let msg = '';

  if (input.validity.valueMissing) msg = '此欄位為必填';
  else if (input.validity.typeMismatch) msg = '格式不正確';
  else if (input.validity.patternMismatch) msg = input.title || '格式不正確';
  else if (input.id === 'password' && input.value.length < 8) msg = '密碼需至少 8 碼';
  else if (input.id === 'confirm' && input.value !== document.getElementById('password').value)
    msg = '密碼不一致';

  showError(input, msg);
  return msg === '';
}

// 即時驗證 (blur 後提示, input 時更新)
form.addEventListener('blur', (e) => {
  if (e.target.tagName === 'INPUT') validateInput(e.target);
}, true);

form.addEventListener('input', (e) => {
  if (e.target.tagName === 'INPUT') validateInput(e.target);
});

// 興趣標籤事件委派
interests.addEventListener('change', () => {
  const checked = interests.querySelectorAll('input[type=checkbox]:checked').length;
  const error = document.getElementById('interest-error');
  if (checked === 0) {
    error.textContent = '請至少選擇一個興趣';
  } else {
    error.textContent = '';
  }
});

// 送出攔截
form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.textContent = '';

  let isValid = true;
  const inputs = form.querySelectorAll('input[required]');
  let firstErrorInput = null;

  inputs.forEach((input) => {
    const ok = validateInput(input);
    if (!ok && !firstErrorInput) firstErrorInput = input;
    if (!ok) isValid = false;
  });

  // 檢查興趣至少一項
  const checked = interests.querySelectorAll('input[type=checkbox]:checked').length;
  if (checked === 0) {
    document.getElementById('interest-error').textContent = '請至少選擇一個興趣';
    isValid = false;
  }

  if (!isValid) {
    if (firstErrorInput) firstErrorInput.focus();
    return;
  }

  // 模擬送出過程
  submitBtn.disabled = true;
  submitBtn.textContent = 'Loading...';
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = '送出';
    successMsg.textContent = '註冊成功！🎉';
    form.reset();
  }, 1000);
});
