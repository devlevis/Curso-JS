const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

//Instalando o 'ejs':
app.set('views', './src/views')
app.set('view engine', 'ejs')

//Aqui sao funcao de "mandar usar":
app.use(express.urlencoded({ extend: true }))
app.use(routes)


app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor em execução na porta 3000')
})