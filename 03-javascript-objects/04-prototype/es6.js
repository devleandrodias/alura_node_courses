class Customer {
  constructor(name, cpf, email, balance) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.balance = balance;

    this.deposit = function (value) {
      this.balance += value;
    };

    this.withdraw = function (value) {
      if (this.balance - value > 0) this.balance -= value;
    };
  }
}

class VipCustomer extends Customer {
  constructor(name, cpf, email, balance, credit) {
    super(name, cpf, email, balance);

    this.credit = credit;
  }

  useCredit(value) {
    this.credit -= value;
  }
}

const vip = new VipCustomer(
  "Leandro",
  "25463257896",
  "leandro@gmail.com",
  0,
  100_000
);

vip.useCredit(5000);
vip.useCredit(1000);

console.log(vip);
console.log(vip.hasOwnProperty("balance"));
