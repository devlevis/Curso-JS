const inputTarefa = document.querySelector('#input-nova-tarefa')
const botaoTarefa = document.querySelector('#botaAddTarefa')
const listaDeTarefa = document.querySelector('#listaTarefa')

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
})

function criaTarefa(textoDoInput) {
    const li = criaLi()
    li.innerText = textoDoInput;
    listaDeTarefa.appendChild(li)
    limpaInput();
    criaBotaoApagar(li);
    salvaTarefa();
}

botaoTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
});

function limpaInput() {
    inputTarefa.value = ' ';
    //ESSE INPUT SERVE COMO INIMAÇÃO DE PISCAGEM DE PONTEIRO(focus()):
    inputTarefa.focus();
}
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar Tarefa')
    li.appendChild(botaoApagar)
}
document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        //AQUI ESTOU REMOVENDO O PAI DO ELEMENTO (el):
        el.parentElement.remove();
        salvaTarefa();
    }
})
function salvaTarefa() {
    const liTarefas = listaDeTarefa.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
        
    }
    //TRANSFORMA O ARRAY EM UMA SO STRING E POSSO CONVERTER DEPOIS PARA ARRAY
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    //LOCAL DO NAVEGADOR ONDE GUARDA AS INFORMAÇOES ENVIADAS:
    localStorage.setItem('tarefas', tarefasJSON)
    console.log(tarefasJSON)
}
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas();