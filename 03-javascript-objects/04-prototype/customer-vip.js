function Customer(name, cpf, email, balance) {
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

function VipCustomer(name, cpf, email, balance, credit) {
  Customer.call(this, name, cpf, email, balance);
  this.credit = credit;
}

const vip = new VipCustomer(
  "Leandro",
  "25463257896",
  "leandro@gmail.com",
  0,
  100_000
);

VipCustomer.prototype.useCredit = function (value) {
  this.credit -= value;
};

vip.useCredit(5000);
vip.useCredit(1000);

console.log(vip);
console.log(vip.hasOwnProperty("balance"));
