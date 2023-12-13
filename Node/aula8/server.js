const express = require('express')
const app = express()

app.use(express.urlencoded({ extend: true }))

//O nome do input "nome", por exemplo, pode ser considerado com chave:
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar Formulario</button>
    </form>
    `)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    //Aqui estou acessando os parametros da url
    console.log(req.params)
    console.log(req.query)
    res.send(req.query.facebookprofile)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você enviou foi: ${req.body.nome}`)
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor em execução na porta 3000')
})




//         Criar   ler    atualizar   apagar
// CRUD -> CREAT,  READ,  UPDATE,     DELETE
//         POST    GET     PUT        DELETE

// http://meusite.com/ <- GET ->  entrege a pagina /principal
// http://meusite.com/sobre <- GET ->  entrege a pagina /sobre
// http://meusite.com/contato <- GET ->  entrege a pagina /contato