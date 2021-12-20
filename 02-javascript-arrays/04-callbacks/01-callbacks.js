const names = ["Ana", "Beatriz", "Thaísa", "Leandro", "Marcelo"];

function printNames(name) {
  console.log(name);
}

names.forEach((name) => printNames(name));

console.log("=======");

names.forEach(printNames);
