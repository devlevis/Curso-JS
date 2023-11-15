const num = '79';

// SE HOUVER MAAIS DE UMA CONDIÇAO VERDADEIRA, APERECERAR A PRIMEIRA CONDICAO CERTA. (NO MESMO IF)
//SO APARECERÁ MAIS DE UMA CONDICAO, CASO SEJA FEITO MAIS UM IF.

if (num === Number(num)) {
    console.log(`${num} É um número!`)
} else {
    console.log(`${num} não é um número!`)
}

if (num >= 0 && num <= 5) {
    console.log(`O número ${num} está entre 0 e 5.`)
} else if (num >= 6 && num <= 10) {
    console.log(`O número ${num} está entre 6 e 10`)
} else if (num >= 11 && num <= 100) {
    console.log(`O número ${num} está entre 11 e 100`)
} else {
    console.log(`O número ${num} é diferente da alternativas propostas.`) 
}