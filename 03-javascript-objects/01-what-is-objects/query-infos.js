const customer = {
  name: "Leandro",
  age: 21,
  cpf: "12364765425",
};

Object.defineProperty(customer, "email", {
  value: "leandro@gmail.com",
  writable: true,
  enumerable: true,
});

console.log(Object.keys(customer));
console.log(Object.values(customer));
console.log(customer["email"]);

for (const [key, value] of Object.entries(customer)) {
  console.log(`${key}: ${value}`);
}

let car = new Object();

car["model"] = "Porche";

Object.defineProperty(customer, "car", {
  value: car,
  enumerable: true,
  writable: false,
});

delete customer.age;

customer.facebook = { username: "leandro" };

console.log(customer);
