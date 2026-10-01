// js/script.js

let warning = document.getElementById('warning')

function fazerLogin(event) {

    event.preventDefault()

    let inputUsername = document
        .getElementById('username')
        .value
        .trim()

    let inputPassword = document
        .getElementById('psw-input')
        .value

    let errorMessage =
        document.getElementById('errorMessage')


    if (
        inputUsername === '' ||
        inputPassword === ''
    ) {

        warning.style.display = 'flex'

        errorMessage.innerText =
            'Preencha todos os campos'

        return
    }


    const resultado = autenticarUsuario(
        inputUsername,
        inputPassword
    )


    if (!resultado.sucesso) {

        warning.style.display = 'flex'

        errorMessage.innerText =
            resultado.mensagem

        return
    }


    window.location.href = 'home.html'
}


function closeWarning() {
    warning.style.display = 'none'
}