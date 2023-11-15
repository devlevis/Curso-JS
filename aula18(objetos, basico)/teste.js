/*
const criarPessoa = {
    nome:'Levi',
    idade: 18,
    peso: '85kg'
}
console.log(criarPessoa)
*/
function criaPessoa(nome, idade, peso) {
    return {
        nome,
        idade,
        peso
    }
}
 const pessoa1 = criaPessoa('Levi', 8, '85kg')
 const pessoa2 = criaPessoa('Luiz', 12, '111kg')
console.log(pessoa1.idade, pessoa2.peso)