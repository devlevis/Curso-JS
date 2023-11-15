//Concatenando Arrays:
/*
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
//        concatene   esse  +    esse
const concatenando = num1.concat(num2)
console.log(concatenando)
*/

/*
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
//        concatene   esse  +    esse +    esse  =  esse
const concatenando = num1.concat(num2, [7, 8, 9], 'Levex')
console.log(concatenando)
*/

//Ou com metodo rest:
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const concatenando = [...num1, ...num2]
console.log(concatenando)