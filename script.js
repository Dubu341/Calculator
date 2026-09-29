const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const divide = function (a, b) {
  return a / b;
};
const multiply = function (a, b) {
  return a * b;
};

let firstNum = "";
let secondNum = "";
let varOperator = "";
let result = 0;
const numBtn = document.querySelectorAll("button");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clrBtn = document.querySelector(".clear");
const display = document.querySelector(".display");

const operate = function (firstNum, varOperator, secondNum) {
  if (firstNum === "" || secondNum === "" || !varOperator) {
    return;
  }
  let num1 = parseFloat(firstNum);
  let num2 = parseFloat(secondNum);

  switch (varOperator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "/":
      result = num2 !== 0 ? divide(num1, num2) : "You shouldnt do that";
      break;

    case "*":
      result = multiply(num1, num2);
      break;
  }
  display.textContent = result.toString();
  //dont work
};

numBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (varOperator === "") {
      firstNum += button.id;
      display.textContent = firstNum;
    } else {
      secondNum += button.id;
      display.textContent = secondNum;
    }
  });
});
//to fix : double clicking operators clears display
function selectOperator(operator) {
  if (firstNum === "" && secondNum === "") return;
  if (firstNum !== "" && secondNum !== "") {
    operate(firstNum, varOperator, secondNum);
    firstNum = result.toString();
    secondNum = "";
    varOperator = "";
  }
  varOperator = operator;
}

addBtn.addEventListener("click", () => {
  selectOperator("+");
});
subtractBtn.addEventListener("click", () => {
  selectOperator("-");
});
multiplyBtn.addEventListener("click", () => {
  selectOperator("*");
});
divBtn.addEventListener("click", () => {
  selectOperator("/");
});
equalBtn.addEventListener("click", () => {
  operate(firstNum, varOperator, secondNum);
});
