let myName = "Leandro";

function sum() {
  return 2 + 2;
}

function printText(text) {
  console.log(typeof text);
  console.log(text);
}

const printTextArrow = (text) => {
  console.log(text);
};

printText();
printText(`Hello, Sr. ${myName}`);
printTextArrow("Hi!");

console.log(sum());

printText(sum());

console.log(Math.random());
console.log(Math.round(3.4));
console.log(Math.ceil(5.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.trunc(4.6));
console.log(Math.pow(4, 2));
console.log(Math.sqrt(64));
console.log(Math.max(0, 12, -8, 23, 15, 2));
console.log(Math.min(0, 12, -8, 23, 15, 2));
