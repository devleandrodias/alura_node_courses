const grades = [10, 6.5, 8, 7.5];

let sum = 0;

grades.forEach((grade) => {
  sum += grade;
});

const average = sum / grades.length;

console.log(average);
