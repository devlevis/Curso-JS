const express = require('express')
const app = express()
const routes = require('./routes')

//Aqui sao funcao de "mandar usar":
app.use(express.urlencoded({ extend: true }))
app.use(routes)


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor em execução na porta 3000')
})