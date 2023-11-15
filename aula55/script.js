//Funcção construtura retorna objetos
//Funcção fabrica tambem retorna objetos
//Nao preciso de o]ponto e virgula
/*
function Pessoa(nome, sobrenome) {
    //Contantes e variaveis aqui dentro se tornam privadas(so uso aqui dentro)
    const nome = 'Levi'

    //Atributos ou metodo publicos:
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function () {
        console.log(this.nome + ' é lindo')
    }
}
const p1 = new Pessoa('Levi', 'Sousa')
const p2 = new Pessoa('Carlos', 'Azevedo')
p1.metodo();*/

function Calculadora() {
    this.display = document.querySelector('.display');

    this.realizaConta = function() {
        let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida!')
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida!');
                return
            }
    }
    this.apagaUm = function() {
        this.display.value = this.display.value.slice(0, -1)
    }
    this.clearDisplay = function() {
        this.display.value = '';
    }
    this.pressionaEnter = function() {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }
    this.inicia = function() {
        this.cliqueBotoes();
        this.pressionaEnter();
    }
    this.cliqueBotoes = function() {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }
            if (el.classList.contains('btn-eq')){
                this.realizaConta();
            }
        });
    }
    this.btnParaDisplay = function(valor) {
        this.display.value += valor;
    }
}
const calculadora = new Calculadora();
calculadora.inicia();