const grades = [10, 6.5, 8, 7.5];

grades.push(7.3);
grades.push(4.2);
grades.push(0.4);

grades.pop();

const average =
  (grades[0] + grades[1] + grades[2] + grades[3] + grades[4] + grades[5]) /
  grades.length;

console.log(grades);
console.log(average);
