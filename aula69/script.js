//Fomas de copiar objetos, sem se vincular a eles:
//Spread operator:
const obj1 = {nome: 'Levi', idade: 18};
const obj2 = {...obj1, cidade: 'Fortaleza'}

obj2.nome = 'Edson'
obj2.idade = '86'
//console.log(obj1)
//console.log(obj2)

//Object assign:
const pessoa1 = {nome: 'Levi', idade: 18};
const pessoa2 = Object.assign({}, pessoa1, {cidade: 'Fortaleza'})

pessoa2.nome = 'Edson'
pessoa2.idade = '86'
//console.log(pessoa1)
//console.log(pessoa2)



//Ver as chaves dos produtos:
const pessoa3 = {nome: 'Levi', idade: 18};
//console.log(Object.keys(pessoa3))



//Ver os valores das chaves:
//console.log(Object.values(pessoa3))


//Ver as chaves e os valores das chaves:
//console.log(Object.entries(pessoa3))



//Interroper modificaçoes em um produto:
Object.freeze(pessoa3)


//DefineProperties: Define varias propiedades
//Defineproperty: Define uma propiedade


//Alterar propiedades de uma chave:
const levi = {altura: 1.70, idade: 18, cidade: 'Fortaleza'}
Object.defineProperty(levi, 'cidade', {
    writable: false,
    configurable: false,
    //Aqui eu disse a propiedade cidade não é mais configurável
    value: 'Outra coisa'
    //Aqui mudei o valor
})
levi.cidade = 'Teresina'
//console.log(levi)


//Ver as propiedades de uma chave:
//console.log(Object.getOwnPropertyDescriptor(levi, 'altura'))