const customer = {
  age: 21,
  active: true,
  name: "Leandro",
  school: {
    name: "FIAP",
    course: "Analysis And Systems Development",
  },
  cpf: "12364765425",
  phones: ["14353453455", "234252345345"],
};

customer.parents = [
  {
    name: "Mariana",
    age: 43,
  },
  {
    name: "Rodrigo",
    age: 46,
  },
];

customer["phones"].forEach((x) => console.log(x));

console.log(customer.school.course);

customer["parents"].push({
  name: "Ana",
  age: 24,
});

customer.parents[1].name = "Rodrigo Silva";

console.log(customer["parents"].map((x) => x.name));
