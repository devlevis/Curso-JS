//Aqui estou requerendo um module que foi criado por mim:
const mod1 = require('./mod1')
//Caso eu quero requerer um modulo do node_modules:] ou instalado no node_modules:
const path = require('path')
//path é um exemplo de modulo do node_modules
//Ou axios agora:
const axios = require('axios')






/*
//const falaNome = mod1.falaNome
//console.log(falaNome())
//console.log(mod1.falaNome())

const {nome, sobrenome, falaNome} = require('./mod1')
console.log(nome, '/', sobrenome, '/', falaNome())
*/
const {Pessoa} = require('./mod1')
const p1 = new Pessoa('Levi')
console.log(p1)