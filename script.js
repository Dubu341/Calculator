const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const divide = function (a, b) {
  return a / b;
};
const multiply = function (array) {
  return array.reduce((product, current) => product * current);
};
let userInput = [""];
let opUserInput = [];
opUserInput.splice(1);
let currentIndex = 0;
function operate() {}
//console.log(operate(1, 5));

function numInput() {
  let numberInput = document.querySelectorAll("#numbers");
  let display = document.querySelector(".display");
  numberInput.forEach((number) => {
    number.addEventListener("click", (num) => {
      value = num.target.textContent;
      display.textContent += value;
      userInput[0] += value;
    });
  });
}
function opInput() {
  let operatorInput = document.querySelectorAll("#operator");
  operatorInput.forEach((operator) => {
    operator.addEventListener("click", (op) => {
      value = op.target.textContent;
      if (opUserInput.length > 0) {
        return false;
      }
      opUserInput.push(value);
    });
  });
}
console.log(userInput);
console.log(opUserInput);
//display text then when operator is pressed .push into an array
numInput();
opInput();
