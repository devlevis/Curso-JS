const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extend: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

//Instalando o 'ejs':
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(middlewareGlobal)
app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor em execução na porta 3000')
})