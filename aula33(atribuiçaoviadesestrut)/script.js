/*
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
*/
/*
const [primeiroNumero, segundoNumero, terceiroNumero, ...restante] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(restante)
*/
// o "...'restante" é uma variada chamada 'restate' que eu criei apos usar os tres pontos '...'

//Pra pular valor eu posso usar strings vazias: "' '", exemplo:
/*
const [ ,dois, ,quatro, ,seis] = numeros;
console.log(dois, quatro, seis)
*/


//Atribuição por desestruturação:

//Eu  quis acessar um elemento um elemnto ja criado(3):
//Para isso eu nomei o primeiro elemento (lista1)
//E apos busquei o elemento que quera dentro do elemento (lista1) que tinha criado;
/*
const numeros = [[1, 2, 3], [3, 5, 6], [7, 8, 9]]
const [lista1, lista2, lista3] = numeros;

console.log(lista1[2])
*/


//Atribuiçao por desestruturação em um objeto:
//Objeto:
const pessoa1 = {
    nome: 'João',
    sobrenome: 'Luiz',
    idade: 29,
    endereco: {
        rua: 'Rua ABC',
        numero: 123
    }
}

//Atribuiçao por desestruturação
const {nome, sobrenome,  endereco:{rua, numero}} = pessoa1;
console.log(nome, sobrenome, rua, numero)