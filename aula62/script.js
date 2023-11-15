//Map:
//Map tem a capacidade de intergair, retornar cada elemento do array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22 ,27]
const numerosDobrados = numeros.map(valor => valor * 2)
//console.log(numerosDobrados)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Cunha', idade: 90},
    {nome: 'Ricardo', idade: 68},
    {nome: 'Roberto', idade: 28},
    {nome: 'Maria', idade: 52},
    {nome: 'Enzo', idade: 15}
];

//Retornar apenas uma string com o nome da pessoas:
const nomes = pessoas.map(pessoa => pessoa.nome);
//console.log(nomes)

//Remover apenas a chave "nome" do objeto
const idades = pessoas.map(function (valores) {
    //delete valores.nome
    return valores
})
//console.log(idades)

//Adicone uma chave id em cada objeto

const comIds = pessoas.map(function(chaves, indices) {
    // Apenas com esse "." e um nome novo("indices") eu criei uma nova chave
    chaves.indice = indices ;
    return chaves
})
//console.log(comIds)
console.log(pessoas)