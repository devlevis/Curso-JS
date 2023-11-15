function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        

        realizaConta() {
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
        },

        apagaUm() {
            //Apagar um caractere do display:
            this.display.value = this.display.value.slice(0, -1)
        },

        clearDisplay() {
            this.display.value = '';
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        cliqueBotoes() {
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
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();