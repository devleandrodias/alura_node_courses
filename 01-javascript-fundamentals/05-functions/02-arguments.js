function sum(num1 = 0, num2 = 0, num3 = 0) {
  return num1 + num2 + num3;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

console.log(sum(1, 2, 7));
console.log(sum(1, 1, 5));
console.log(sum("Leandro", "Bemfica", "Dias"));
console.log(sum("Leandro", true, 1));

console.log(multiplication(sum(1, 2), sum(3, 0, 2)));
