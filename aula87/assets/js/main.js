//Buscando os dados do json('pessoas.json'):
/*
fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json))
  */
//OU POSSO CHAMAR EM AXIOS:
 axios('pessoas.json')
 .then(resposta => carregaElementosNaPagina(resposta.data))

function carregaElementosNaPagina(json) {
  const table = document.createElement('table')
  for (const pessoa of json) {
    const tr = document.createElement('tr')

    let td1 = document.createElement('td')
    td1.innerHTML = pessoa.nome
    tr.appendChild(td1)
    let td2 = document.createElement('td')
    td2.innerHTML = pessoa.idade
    tr.appendChild(td2)
    let td3 = document.createElement('td')
    td3.innerHTML = pessoa.salario
    tr.appendChild(td3)

    table.appendChild(tr)
  }

  const resultado = document.querySelector('.resultado')
  //O 'APPENCHLID', serve para chamar algo para dentro de uma const, por exemplo: resultado:
  resultado.appendChild(table)
}