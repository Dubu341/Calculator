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
let result = "";
//let isFired = false;
const numBtn = document.querySelectorAll("button");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clrBtn = document.querySelector(".clear");
const display = document.querySelector(".display");
display.textContent = "0";

const operate = function (a, op, b) {
  if (a === "" || b === "" || !op) {
    return;
  }
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);

  switch (op) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "/":
      result = num2 !== 0 ? divide(num1, num2) : "You should'nt do that";
      break;

    case "*":
      result = multiply(num1, num2);
      break;
  }

  display.textContent = result.toString();
  firstNum = result.toString();
  secondNum = "";
  varOperator = "";
  result = "";
};
const allClear = function () {
  firstNum = "";
  secondNum = "";
  varOperator = "";
  result = "";
  display.textContent = "0";
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
// fix : double clicking operators hides display
// do:clear calculator if a number is entered after = instead of an operator;
//fix : operator changing if entered in sequence
function selectOperator(operator) {
  if (firstNum === "" && secondNum === "") return;
  if (firstNum !== "" && secondNum !== "") {
    operate(firstNum, varOperator, secondNum);
  }
  varOperator = operator;
}

addBtn.addEventListener("click", () => {
  selectOperator("+");
  //  isFired = false;
});
subtractBtn.addEventListener("click", () => {
  // isFired = false;
  selectOperator("-");
});
multiplyBtn.addEventListener("click", () => {
  // isFired = false;
  selectOperator("*");
});
divBtn.addEventListener("click", () => {
  //  isFired = false;
  selectOperator("/");
});
equalBtn.addEventListener("click", () => {
  operate(firstNum, varOperator, secondNum);
  if (secondNum !== "") {
  }
  //  isFired = true;
});
clrBtn.addEventListener("click", () => {
  allClear();
});
