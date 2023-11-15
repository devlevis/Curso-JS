//Filter:

//Retornar os numeros msiores que 10:
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosFiltrados = numeros.filter(valor => valor > 5
);
//console.log(numerosFiltrados)




//Retorne as pessoas cujo nome termina com A
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Cunha', idade: 90},
    {nome: 'Ricardo', idade: 68},
    {nome: 'Roberto', idade: 28},
    {nome: 'Maria', idade: 52},
    {nome: 'Enzo', idade: 15}
]
// Retronar as pessoa que tem o nome com 5 letras ou mais
const pessoaComNomeGrande = pessoas.filter(x => x.nome.length >= 5)
//console.log(pessoaComNomeGrande)

//Retornar as pessoas com mais de 50 anos:
const pessoasComMaisDe50 = pessoas.filter(i => i.idade >= 50)
//console.log(pessoasComMaisDe50)

//Retorne as pessoas cujo nome termina com A
const nomeQueTerminaComA = pessoas.filter(n => {
    return n.nome.toLowerCase().endsWith('a')
})
console.log(nomeQueTerminaComA)