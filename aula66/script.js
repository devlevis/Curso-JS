const pessoa = {
    nome: 'Levi',
    sobrenome: 'Cunha'
};
const chaveNome = 'nome'
//console.log(pessoa[chaveNome])

//Posso criar um objeto assim tambem:
const pessoa1 = new Object();
pessoa1.nome = 'Levi';
pessoa1.idade = 18;
//console.log(pessoa1)

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
const p1 = new Pessoa('Levi', 'Sousa', 18)
//Assim eu impossibilito de mecher no valor do meu obejto:
Object.freeze(p1)
p1.nome = 'Gusta'
const p2 = new Pessoa('Savio', 'Cunha', 18)
console.log(p1)