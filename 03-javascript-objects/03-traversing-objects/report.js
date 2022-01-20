const customer = Object.create({
  name: "Leandro",
  balance: 0,
  age: 21,
  cpf: "12364765425",
  email: "leandro@gmail.com",
  deposit: function (value) {
    this.balance += value;
  },
  withdraw: function (value) {
    if (this.balance - value > 0) this.balance -= value;
  },
});

let report = "";

for (let info in customer) {
  const customerInfo = customer[info];
  const typeCustomerInfo = typeof customerInfo;

  if (typeCustomerInfo === "object" || typeCustomerInfo === "function") {
    continue;
  } else {
    report += `${info} ==> ${customerInfo}\n`;
  }
}

console.log(report);
