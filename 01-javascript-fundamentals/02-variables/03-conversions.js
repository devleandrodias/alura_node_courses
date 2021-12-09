// Conversions (Parse)

const number = 123;
const numberString = "123";

// Implicit conversion
console.log(number == numberString);
console.log(number === numberString);
console.log(number + numberString);

// Explicit conversion
console.log(number == Number(numberString));
console.log(String(number) == numberString);
console.log(number + Number(numberString));

// NaN
console.log(Number("54A"));
