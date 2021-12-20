const names = ["Ana", "Beatriz", "Thaísa", "Leandro"];
const grades = [8.5, 4.4, 6.7, 9.8];

const getApprovedStudents = (_, index) => grades[index] > 7;

console.log(names.filter(getApprovedStudents));
