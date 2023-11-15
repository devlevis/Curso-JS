//const nomes = ['Levi', 'Joao', 'Maria']
//nomes[1] = 'Pedro'
//Se eu quiser copiar o valor de outro array, para uma constante, sem ela se declarar como a constantres anterior:
//const novo = [...nomes]
//delete nomes[1]
/*
console.log(nomes)
console.log(novo)
console.log(novo.splice(1, 2))
*/
//Separar uma string , logo transformando em uma array:
const nome = 'Levi, Cunha, Sousa'
const nomes = nome.split(',')
//Transfromar um array em uma string:
const array = ['Levi', 'Sousa', 'Cunha']
const separarArray = array.join(' ')
console.log(separarArray)
