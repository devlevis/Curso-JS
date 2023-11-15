/*
const nome01 = 'Levi';
const sobrenome01 = 'Sousa';
const idade01 = 18;

const nome02 = 'Mayk';
const sobrenome02 = 'Aguiar'
const idade02 = 42;
*/
//POSSO SUBSTITUIR ISSO POR ISSO ISSO=
/*
const pessoa1 = {
    nome: 'Levi',
    sobrenome: 'Sousa',
    idade: 18
};
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)
= Levi
= Sousa
= 18
*/
/*
function criaPessoa(nome, sobrenome, idade, peso) {
    return {
        nome,
        sobrenome,
        idade,
        peso
    };
}
const pessoa1 = criaPessoa('Luiz', 'Miranda', 21, '80kg')
const pessoa2 = criaPessoa('Levi', 'Sousa', 18)
const pessoa3 = criaPessoa('Mayk', 'Aguiar', 42)

*/
const pessoa1 ={
    nome: 'Levi',
    sobrenome: 'Sousa',
    idade: '18',

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++; //acresecentar mais 1 ano
    }
};
pessoa1.incrementaIdade()
pessoa1.incrementaIdade()
pessoa1.incrementaIdade()
pessoa1.incrementaIdade()
pessoa1.fala();