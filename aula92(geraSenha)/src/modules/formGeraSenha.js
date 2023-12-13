import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada')
const qntCaracteres = document.querySelector('.qnt-caracteres')
const chkMaisculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera() {
    const senha = geraSenha(
        qntCaracteres.value,
        chkMaisculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
        )

        return senha || 'Nada Selecionado';
}