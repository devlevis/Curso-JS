//Declaração de uma função(function hoisting) 
const souUmaFuncao = function() {
    console.log('Sou uma constante-função!')
}
//First-class objects(obejtos de primeira classe)
//Function expression
function executarFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executarFuncao(souUmaFuncao);
//Arrow function: 
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow(); 
//Funcao dentro de objeto:
const obj = {
    funcaoObjeto() {
        console.log('Sou um objeto com uma funcao dentro')
    }
}
obj.funcaoObjeto();

const objeto = {
    nome: 'Levi',
    idade: 18,
    peso: '85kg'
}
for (let chaves in objeto) {
    console.log(objeto[chaves])
}
