// HOISTING (functions with var)

// Declaração de função
function myFunction(num1, num2) {
  return num1 + num2;
}

// Expressão de função
const myFunctionExp = function (num1, num2) {
  return num1 + num2;
};

console.log(myFunction(1, 2));
console.log(myFunctionExp(1, 2));

console.log(sayHello());
console.log(sayHello2());

function sayHello() {
  return "Hello";
}

const sayHello2 = function () {
  return "Hello";
};
