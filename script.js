const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const num = btn.dataset.num;
    const op = btn.dataset.op;

    if(btn.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
    } else if(btn.id === 'equals') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
      }
    } else if(op) {
      if(resultDisplayed) resultDisplayed = false;
      currentInput += op;
      display.textContent = currentInput;
    } else if(num) {
      if(resultDisplayed) {
        currentInput = num;
        resultDisplayed = false;
      } else {
        currentInput += num;
      }
      display.textContent = currentInput;
    }
  });
});
