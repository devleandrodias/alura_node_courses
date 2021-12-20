const names = ["leandRo", "ANA", "Julia", "beatriz"];

function normalizeName(name) {
  return name.toLowerCase();
}

console.log(names.map(normalizeName).sort());
