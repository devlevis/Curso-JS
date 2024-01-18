require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Mongoose serve para administrar o banco de dados
//Aqui estou conectando com a base de dados:
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    app.emit('pronto')
})
.catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')
const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csurf = require('csurf')
const { middlewareGlobal, checkCsrfError, csrfMidlleware } = require('./src/middlewares/middleware')

app.use(helmet())

app.use(express.urlencoded({ extend: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'sjkjsjfdbsbsd sjbdgwad()',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        //Isso corresponde que via ficar salvo 7 dias na base de dados:
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash())

//Views são arquivos que renderizam na tela, que o usuario vai ver, como o html: 
//Instalando o 'ejs':
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(csurf())

//Nossos propios midllewares:
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMidlleware)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor em execução na porta 3000')
    })
})
