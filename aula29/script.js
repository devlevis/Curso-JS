/*
const data = new  Date('2004-11-01 10:15:45.999');
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1) // Mês comeca contar de 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0- Domingo, 6 - Sábado
console.log(data.toString());
*/


//Criando essa funçao eu deixo um zero em numeor menores qeu 10:
function maisZero(num) {

    return num >=10 ? num : `0${num}`;
}

function formatData(data) {
    const dia = maisZero(data.getDate());
    const mes = maisZero(data.getMonth() + 1);
    const ano = maisZero(data.getFullYear());
    const hora = maisZero(data.getHours());
    const minuto = maisZero(data.getMinutes());
    const segundo = maisZero(data.getSeconds());
    
    return (`${dia}/${mes}/${ano}/ ${hora}:${minuto}:${segundo}`);
}

const data = new Date();
const dataBrasil = formatData(data)

console.log(dataBrasil);