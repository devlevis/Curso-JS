const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

/*
const pessoas = [
    {nome: 'Levi'},
    {nome: 'Edu'},
    {nome: 'Ana'},
    {nome: 'Rafa'}
]
//Aqui serve para transformar em json
//O primeiro parametro voce escolhe o quue vocer quer transoformar em json
//O segundo para separar os elementos
//O terceiro par organizar os elementos

const json = JSON.stringify(pessoas, '', 2)
escreve(caminhoArquivo, json)
*/

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
//Aqui estou transformando o json em um objeto javascrit:
    dados = JSON.parse(dados)

    //aqui estou mostrando os elementos:
    dados.forEach(valor => console.log(valor));
}
lerArquivo(caminhoArquivo)