const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' })
}
//flag: 'w' = tira o que ja ta escrito dentro do arquivo e coloca algo novo
//flag: 'a'= adiciona
// \n depois do texto que quer inserir faz com que quebre a linha