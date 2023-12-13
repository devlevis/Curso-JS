const express = require('express')
const app = express()

//         Criar   ler    atualizar   apagar
// CRUD -> CREAT,  READ,  UPDATE,     DELETE
//         POST    GET     PUT        DELETE

// http://meusite.com/ <- GET ->  entrege a pagina /principal
// http://meusite.com/sobre <- GET ->  entrege a pagina /sobre
// http://meusite.com/contato <- GET ->  entrege a pagina /contato

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar Formulario</button>
    </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Formulario recebido com sucesso')
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor em execução na porta 3000')
})