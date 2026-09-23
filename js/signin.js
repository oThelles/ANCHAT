let warning = document.getElementById('warning')

function fazerLogin(event) { 
    event.preventDefault(); 
    
    let inputUsername = document.getElementById('username').value; 
    let inputPassword = document.getElementById('psw-input').value; 
    let inputPasswordConfirm = document.getElementById('psw-input-confirm').value; 
    let errorMensage = document.getElementById('errorMessage');

    if (inputUsername === '' || inputPassword === '' || inputPasswordConfirm === '') {
        warning.style.display = 'flex'
        errorMensage.innerText = 'Preencha todos os campos'; 
    } 

    else if (inputPassword !== inputPasswordConfirm){ 
        warning.style.display = 'flex'
        errorMensage.innerText = 'As senhas não são iguais'; 
    } 

    else if (inputPassword.length < 8){
        warning.style.display = 'flex'
        errorMensage.innerText = 'Sua senha é muito pequena'
    }

    else { 
        window.location.href = 'home.html'
    } 
}

function closeWarning(){
    warning.style.display = 'none'
}