/*
const nome = 'Levi'
const sobrenome = 'Sousa'

const falaNome = () => nome + ' ' + sobrenome
*/
/*
module.exports.nome = nome
module.exports.sobrenome = 'Cunha'
module.exports.falaNome = falaNome
*/
/*
exports.nome = nome
exports.sobrenome = 'Cunha'
exports.falaNome = falaNome
exports.qualquerCoisa = 'O que eu quiser exportar'
//console.log('Aqui faz parte do mod1')
*/
class Pessoa{
    constructor(nome) {
        this.nome = nome
    }
}
exports.Pessoa = Pessoa