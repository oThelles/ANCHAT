let warning = document.getElementById('warning')

function fazerLogin(event) { 
    event.preventDefault(); 
    
    let inputUsername = document.getElementById('username').value; 
    let inputPassword = document.getElementById('psw-input').value; 
    let errorMensage = document.getElementById('errorMessage');

    if (inputUsername === '' || inputPassword === '') {
        warning.style.display = 'flex'
        errorMensage.innerText = 'Preencha todos os campos'; 
    } else { 
        window.location.href = 'home.html'
    } 
}

function closeWarning(){
    warning.style.display = 'none'
}