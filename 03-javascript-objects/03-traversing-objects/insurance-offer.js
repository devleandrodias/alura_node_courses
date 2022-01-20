const customer = {
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
};

function offerInsurance(customer) {
  const propsCustomer = Object.keys(customer);

  if (propsCustomer.includes("dependents")) {
    console.log(`Offer life insurance to the customer ${customer.name}`);
  }
}

offerInsurance(customer);

console.log(Object.keys(customer));
console.log(Object.values(customer));
console.log(Object.entries(customer));
