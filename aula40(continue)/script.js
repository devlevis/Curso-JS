//CONTINUE serve para buscar tal elemento escolhido, pular o mesmo e dar continuidade:
//Ja o BREAK serve para quando achar tqal alemento escolhido, ele para a checagem
const numeros = [1,2,3,4,5,6,7,8,9]

for (const numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue;
    }
    if (numero === 4) {
        console.log('Parei no 4, saindo...')
        break;
    }

    console.log(numero)
}
