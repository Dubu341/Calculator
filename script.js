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
let isFired = false;
// let decimal = "";
// let decimalIsFired = false;
const numBtn = document.querySelectorAll(".numbers");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clrBtn = document.querySelector(".clear");
const display = document.querySelector(".display");
// const decimalBtn = document.querySelector(".decimal");
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
  // decimal = "";
  // decimalIsFired = false;
  isFired = true;
};
const allClear = function () {
  firstNum = "";
  secondNum = "";
  varOperator = "";
  result = "";
  // decimal = "";
  display.textContent = "0";
  // decimalIsFired = false;
  isFired = false;
};
numBtn.forEach((number) => {
  number.addEventListener("click", () => {
    if (isFired === true) {
      allClear();
    }
    if (varOperator === "") {
      firstNum += number.id;
      display.textContent = firstNum;
    } else {
      secondNum += number.id;
      display.textContent = secondNum;
    }
    // decimal = "";
  });
});
//fix : operator changing if entered in sequence
function selectOperator(operator) {
  if (firstNum === "" && secondNum === "") return;
  if (firstNum !== "" && secondNum !== "") {
    operate(firstNum, varOperator, secondNum);
    isFired = false;
  }
  varOperator = operator;
}

addBtn.addEventListener("click", () => {
  isFired = false;
  // decimalIsFired = false;
  selectOperator("+");
});
subtractBtn.addEventListener("click", () => {
  isFired = false;
  // decimalIsFired = false;
  selectOperator("-");
});
multiplyBtn.addEventListener("click", () => {
  isFired = false;
  // decimalIsFired = false;
  selectOperator("*");
});
divBtn.addEventListener("click", () => {
  isFired = false;
  // decimalIsFired = false;
  selectOperator("/");
});
equalBtn.addEventListener("click", () => {
  operate(firstNum, varOperator, secondNum);
  if (secondNum !== "") {
  }
});
clrBtn.addEventListener("click", () => {
  allClear();
});

// unfinished
// decimalBtn.addEventListener("click", () => {
//   if (isFired === true) {
//     allClear();
//   }
//   if (decimalIsFired === true) {
//     return;
//   }
//   decimal = decimalBtn.id;
//   display.textContent += decimal;
//   decimalIsFired = true;
// });
