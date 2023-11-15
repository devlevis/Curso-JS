const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};
const objC = {
    chaveC: 'C'
};

//Transferir o "__proto__" de um objeto para o outro:
//Disse que 'objB' agora tem o "__proto__" do 'objA'.
Object.setPrototypeOf(objB, objA);
//Disse que 'objC' agora tem o "__proto__" do 'objB', que consequentemente tem o "__proto__" de 'objA' também
Object.setPrototypeOf(objC, objB);


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
//Colocando um metodo de desconto dentro do prototype da funcao "Produto":
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};
const p1 = new Produto('Bola', 200)
p1.desconto(20);
//console.log(p1)

const p2 = {
    nome: 'Copo',
    preco: 10
};
//Passando o prototype da funcao 'Produto' para o obejto 'p2':
Object.setPrototypeOf(p2, Produto.prototype);


//Setar o protype de um objeto na criaçao do mesmo:
const p3 = Object.create(Produto.prototype);
p3.preco = 10;
p3.desconto(10)
console.log(p3)

//Setar o prototype de um obejto na criaçao e criar as chaves do mesmo logo em seguida:
const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Camisa',
    },
    preco: {
        writable:
        true,
        configurable: true,
        enumerable: true,
        value: 50,
    }
});
p3.desconto(10);
console.log(p3)