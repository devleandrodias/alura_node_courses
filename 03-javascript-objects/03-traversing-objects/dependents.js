const customers = [
  {
    name: "Leandro",
    balance: 0,
    age: 21,
    cpf: "12364765425",
    email: "leandro@gmail.com",
    dependents: [
      {
        name: "Mariana",
        age: 43,
      },
      {
        name: "Rodrigo",
        age: 46,
      },
    ],
    deposit: function (value) {
      this.balance += value;
    },
    withdraw: function (value) {
      if (this.balance - value > 0) this.balance -= value;
    },
  },
  {
    name: "Thaísa",
    balance: 0,
    age: 21,
    cpf: "12364765425",
    email: "leandro@gmail.com",
    dependents: [
      {
        name: "Rafaela",
        age: 43,
      },
      {
        name: "João",
        age: 46,
      },
    ],
    deposit: function (value) {
      this.balance += value;
    },
    withdraw: function (value) {
      if (this.balance - value > 0) this.balance -= value;
    },
  },
];

const dependents = [...customers[0].dependents, ...customers[1].dependents];

console.table(dependents);
