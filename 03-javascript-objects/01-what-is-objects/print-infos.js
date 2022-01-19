const customer = {
  name: "Leandro",
  age: 21,
  cpf: "12364765425",
};

console.log(customer.name);

console.log(customer["cpf"]);

const { age, ...infos } = customer;

console.log(age);
console.log(infos);
console.log(`${infos["name"]} - ${infos["cpf"]}`);
