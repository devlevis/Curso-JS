function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    //Aqui estou linkando as funcoes 'Produto' e 'Camiseta': 
    //Estou indicando que quero os objetos nome e preco para cá
    Produto.call(this, nome, preco)
    //Essa propiedade aqui será APENAS de 'Camiseta':
    this.cor = cor;
};
//Aqui eu vou linkar o 'prototype' de 'Produto' para 'Camiseta', onde 'Camiseta' vai herdar o prototype de 'Produto':
//Criarei o prototype de 'Produto' para dentro do 'prototype' de 'Camiseta'
Camiseta.prototype = Object.create(Produto.prototype)
//E aqui estou lembrando OBRIGATORIAMENTE ao sistema que a funcao construtora dos objetos derivados de 'Camiseta' tem que ser 'Camiseta' e nao 'Produto':
Camiseta.prototype.constructor = Camiseta;

//Aqui irei criar uma funcao de aumento em porcentagem apenas para 'Camiseta':
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const camiseta1 = new Camiseta('Regata', 30, 'Vermelha')
camiseta1.aumento(10)
console.log(camiseta1)