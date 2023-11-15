//Poliformismo(metodos se comparatarem diferente de acordo com sua sub-classe mesmo vindo de um mesmo pai):
//Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};
Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    //Para ver o saldo apos o deposito:
    this.verSaldo()
}
Conta.prototype.verSaldo = function () {
    console.log(`Àg/c: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`);
};
const conta1 = new Conta(11, 22, 10)

//subclass
function ContaCorrente(agencia, conta, saldo, limite) {
    //Aqui eu chamei os elemento da funcao "Conta" com o metodo "call"
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
};
//Aqui copiei os metodos do prototype de "Conta" de coloquei em "ContaCorrente"
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

//POLIMORFISMO(metodo derivado da superclass "Conta", e que funciona diferenciadamente aqui em "ContaCorrente"):
ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor
    this.verSaldo()
}
const cc1 = new ContaCorrente(11, 22, 0, 100)
cc1.depositar(10)
cc1.sacar(110)


//subclass
function ContaPoupanca(agencia, conta, saldo) {
    //Aqui eu chamei os elementos da funcao "Conta" com o metodo "call"
    Conta.call(this, agencia, conta, saldo);
};
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;
const cp1 =new ContaPoupanca(11, 22, 0)
cp1.depositar(10)
cp1.sacar(110)
cp1.sacar(1)