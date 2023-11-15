/*
console.log(data.getDate())
console.log(data.getDay())
console.log(data.getMonth() + 1)
console.log(data.getFullYear())
console.log(data.getHours())
console.log(data.getMinutes())
*/
const resultado = document.querySelector('#resultado')
const data = new Date();

let mes = data.getMonth();
function funcaoMesTexto(mes) {
    let mesTexto = mes;

    switch (mes) {
        case 0:
            mesTexto = 'Janeiro'
            break;
        case 1:
            mesTexto = 'Fevereiro'
            break;
        case 2:
            mesTexto = 'Março'
            break;
        case 3:
            mesTexto = 'Abril'
            break;
        case 4:
            mesTexto = 'Maio'
            break;
        case 5:
            mesTexto = 'Junho'
            break;
        case 6:
            mesTexto = 'Julho'
            break;
        case 7:
            mesTexto = 'Agosto'
            break;
        case 8:
            mesTexto = 'Setembro'
            break;
        case 9:
            mesTexto = 'Outubro'
            break;
        case 10:
            mesTexto = 'Novembro'
            break;
        case 11:
            mesTexto = 'Dezembro'
            break;
        default:
            mesTexto = ' '
            break;
    }
    return mesTexto;
}

let diaSemana = data.getDay();
function funcaoDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto = diaSemana;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            break;
        case 1:
            diaSemanaTexto = 'Segunda'
            break;
        case 2:
            diaSemanaTexto = 'Terça'
            break;
        case 3:
            diaSemanaTexto = 'Quarta'
            break;
        case 4:
            diaSemanaTexto = 'Quinta'
            break;
        case 5:
            diaSemanaTexto = 'Sexta'
            break;
        case 6:
            diaSemanaTexto = 'Sábado'
            break;

        default:
            diaSemanaTexto = ' '
            break;
    }
    return diaSemanaTexto;

}

const diaSemanaTexto = funcaoDiaSemanaTexto(diaSemana);
const mesTexto = funcaoMesTexto(mes);

console.log(`${data.getDay()}, ${data.getDate()} de ${data.getMonth()} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`)

resultado.innerHTML += `<p>${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}</p>`;