// Função construtora
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

// Instância de Cliente
const leandro = new Customer("Leandro", "12545896345", "leandro@gmail.com", 0);

console.log(leandro.__proto__);

// Cadeia de protótipo
console.log(leandro.__proto__.__proto__);
