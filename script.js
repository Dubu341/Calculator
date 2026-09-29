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

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

const numBtn = document.querySelectorAll("button");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".requal");
const clrBtn = document.querySelector(".clear");

const operate = function (firstNum, operator, secondNum) {
  operator(firstNum, secondNum);
};
