const grades = [10, 6.5, 8, 7.5];

let sum = 0;

for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

const average = sum / grades.length;

console.log(average);
