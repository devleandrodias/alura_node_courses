const arrayTest = [1, 2, 3];
const arrayTest2 = [3, 4, 5];

const arrayConcat = arrayTest.concat(arrayTest2);
console.log(arrayConcat);

const filter = arrayTest.filter((x) => x >= 2);
console.log(filter);

const find = arrayTest.find((x) => x > 2);
console.log(find);

const findIndex = arrayTest.findIndex((x) => x > 2);
console.log(findIndex);

const indexOf = arrayTest.indexOf(3);
console.log(indexOf);

arrayTest.shift();
console.log(arrayTest);

arrayTest2.unshift(7);
console.log(arrayTest2);
