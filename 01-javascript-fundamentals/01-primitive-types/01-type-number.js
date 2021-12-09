// Type Number

const myNumber = 3;
const num1 = 1;
const num2 = 2;

const sum = num1 + num2;
const sub = num1 - num2;
const division = num1 / num2;
const multiplication = num1 * num2;

console.log(myNumber);
console.log(sum);
console.log(sub);
console.log(division);
console.log(multiplication);

const floatNumber = 3.2;
const otherFloatNumber = 0.5;
const bigNumber = 3452345.234523345;
const salary = 5423.23;

console.log(floatNumber);
console.log(otherFloatNumber);
console.log(parseFloat(bigNumber.toFixed(2)));

console.log(
  salary.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

// NaN (Not A Number)
const alura = "Alura";
console.log(alura * num1);

// Infinity
const zero = 0;
console.log(num1 / zero);
