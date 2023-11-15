const cidades = ['Fortaleza', 'Natal', 'Belo Horizonte', 'Teresina']
/*
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]) 
}
*/
/*
for (let quantIndices in cidades) {
    console.log(quantIndices)
}
*/
const pessoa = {
    nome: 'João',
    idade: 25,
    cidade: 'São Paulo'
}

for (let chaves in pessoa) {
    console.log(pessoa[chaves])
} 
console.log(pessoa.nome)