const names = ["João", "Juliana", "Caio"];

const findStudent = (studentName) => {
  const index = names.indexOf(studentName);

  if (index === -1) {
    console.log(`Student ${studentName} not found`);
  } else {
    console.log(`Hellou ${names[index]}!`);
  }
};

findStudent("Leandro");
findStudent("João");
findStudent("Caio");
