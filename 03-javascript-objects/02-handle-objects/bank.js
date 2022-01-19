const customer = Object.create({
  name: "Leandro",
  balance: 0,
  deposit: function (value) {
    this.balance += value;
  },
  withdraw: function (value) {
    if (this.balance - value > 0) this.balance -= value;
  },
});

customer.deposit(100);
customer.deposit(50);
customer.withdraw(75);

console.log(`${customer.name} - Balance: CAD $${customer.balance.toFixed(2)}`);
