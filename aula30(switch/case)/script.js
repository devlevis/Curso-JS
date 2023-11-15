function getdiaSemanaEmTexto (diaSemana) {
    let diaSemanaEmTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaEmTexto = 'Domingo'
            break;
        case 1:
            diaSemanaEmTexto = 'Segunda'
            break;
        case 2:
            diaSemanaEmTexto = 'Terça'
            break;
        case 3:
            diaSemanaEmTexto = 'Quarta'
            break;
        case 4:
            diaSemanaEmTexto = 'Quinta'
            break;
        case 5:
            diaSemanaEmTexto = 'Sexta'
            break;
        case 6:
            diaSemanaEmTexto = 'Sabado'
            break;
        default:
            diaSemanaEmTexto = ' '
            break;
    }
    return diaSemanaEmTexto;
}

const data = new Date('2004-11-04 21:30:00');
const diaSemana = data.getDay()
const diaSemanaEmTexto = getdiaSemanaEmTexto(diaSemana);

console.log(diaSemana, diaSemanaEmTexto)