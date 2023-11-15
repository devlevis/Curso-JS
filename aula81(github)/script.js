class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')

        this.eventos();
    }

    eventos() {
        //Aqui junto com o 'handleSubmit()' estou evitando o envio do formulario
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if(camposValidos && senhasValidas) {
            alert("Formulario enviado com sucesso!")
            this.formulario.submit()
        } 
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'As senhas não são iguais.')
            this.criaErro(repetirSenha, 'As senhas não são iguais.')
        }
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'A senha deve conter entre 6 e 12 caracteres')
            
        }
        return valid;
    }

    camposSaoValidos() {
        let valid = true;
        //Isso é par anao repetir a mensagem de erro de espaço vazio:
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            //Aqui estou faqlando qual campo está vazio:
            const label = campo.previousElementSibling.innerText;
            //Se o campo estiver vazio mostre tal mensagem e valide como falso:
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco`)
                valid = false
            }
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false
            }
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false
            }
        }
        return valid;
    }
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'O nome do usuário deve conter entre 3 e 12 caracteres.');
            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e/ou numeros');
            valid = false;
        }
        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false
        }
        return 'CPF válido';
    }

    //Criando erro::
    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario();