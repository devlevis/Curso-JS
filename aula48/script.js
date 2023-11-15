//arguments sustenta todos os argumentos enviados:
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    //console.log(total)
}
funcao(1, 2, 4, 5);
//ASSUMINDO VALOR PADRAO DE UM PARAMETRO, CASO NAO SEJA DEFINIDO PELO O USUARIO:
function funcao2(a, b = 2, c =4) {
    //console.log(a + b + c)
}
funcao2(1, undefined, 3);
//             Aqui declaro meus parametros
function funcao3({nome, idade, peso}) {
    //     Aqui meus argumentos de acordo com meus parametros:
    //console.log(nome, idade, peso)
}
//     Aqui mesu argumentos:
funcao3({nome: 'Levi', idade: 18, peso: '85Kg'});

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
      if (operador === '+') acumulador += numero 
      if (operador === '-') acumulador -= numero 
      if (operador === '/') acumulador /= numero 
      if (operador === '*') acumulador *= numero 
    }
    console.log(acumulador)
}
conta('-', 1, 10, 20, 30, 40);