const students = [
  "Ana",
  "Leandro",
  "Beatriz",
  "Thaísa",
  "João",
  "Lara",
  "Renan",
  "Marcelo",
];

const room1 = students.slice(0, students.length / 2);
const room2 = students.slice(students.length / 2);

console.log(`Room 1: ${room1}`);
console.log(`Room 2: ${room2}`);
