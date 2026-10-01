// js/home.js

const usuarioLogado = JSON.parse(
    localStorage.getItem('usuarioLogado')
)

if (!usuarioLogado) {

    window.location.href = 'index.html'

} else {

    const userName =
        document.getElementById('user-name')

    userName.innerText =
        `Olá, ${usuarioLogado.username}`
}


let elemmentHTML = null


function show(elemment) {

    elemmentHTML =
        document.getElementById(elemment)

    elemmentHTML.style.display = 'flex'
}


function hide(elemment) {

    elemmentHTML =
        document.getElementById(elemment)

    elemmentHTML.style.display = 'none'
}

function clearDatabase(){
    localStorage.clear()
    window.location.href = 'index.html'
}