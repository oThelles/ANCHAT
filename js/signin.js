// js/signin.js

let warning = document.getElementById('warning')

function fazerCadastro(event) {

    event.preventDefault()

    let inputUsername = document
        .getElementById('username')
        .value
        .trim()

    let inputPassword = document
        .getElementById('psw-input')
        .value

    let inputPasswordConfirm = document
        .getElementById('psw-input-confirm')
        .value

    let errorMessage =
        document.getElementById('errorMessage')


    if (
        inputUsername === '' ||
        inputPassword === '' ||
        inputPasswordConfirm === ''
    ) {

        warning.style.display = 'flex'

        errorMessage.innerText =
            'Preencha todos os campos'

        return
    }


    if (inputPassword !== inputPasswordConfirm) {

        warning.style.display = 'flex'

        errorMessage.innerText =
            'As senhas não são iguais'

        return
    }


    if (inputPassword.length < 8) {

        warning.style.display = 'flex'

        errorMessage.innerText =
            'Sua senha é muito pequena'

        return
    }


    const resultado = cadastrarUsuario(
        inputUsername,
        inputPassword
    )


    if (!resultado.sucesso) {

        warning.style.display = 'flex'

        errorMessage.innerText =
            resultado.mensagem

        return
    }


    localStorage.setItem(
        'usuarioLogado',
        JSON.stringify({
            id: resultado.usuario.id,
            username: resultado.usuario.username
        })
    )


    window.location.href = 'home.html'
}


function closeWarning() {
    warning.style.display = 'none'
}