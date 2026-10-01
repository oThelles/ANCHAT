// js/database.js

// =========================
// ANCHAT - BANCO LOCAL
// =========================

let usuarios = JSON.parse(
    localStorage.getItem('usuarios')
) || []


// =========================
// SALVAR USUÁRIOS
// =========================

function salvarUsuarios() {
    localStorage.setItem(
        'usuarios',
        JSON.stringify(usuarios)
    )
}


// =========================
// CADASTRO
// =========================

function cadastrarUsuario(username, senha) {

    username = username.trim()

    const usuarioExistente = usuarios.find(usuario => {
        return usuario.username === username
    })

    if (usuarioExistente) {
        return {
            sucesso: false,
            mensagem: 'Esse nome de usuário já existe'
        }
    }

    const novoUsuario = {
        id: Date.now(),
        username: username,
        senha: senha
    }

    usuarios.push(novoUsuario)

    salvarUsuarios()

    return {
        sucesso: true,
        mensagem: 'Conta criada com sucesso',
        usuario: novoUsuario
    }
}


// =========================
// AUTENTICAÇÃO
// =========================

function autenticarUsuario(username, senha) {

    username = username.trim()

    const usuario = usuarios.find(usuario => {
        return (
            usuario.username === username &&
            usuario.senha === senha
        )
    })

    if (!usuario) {
        return {
            sucesso: false,
            mensagem: 'Usuário ou senha incorretos'
        }
    }

    localStorage.setItem(
        'usuarioLogado',
        JSON.stringify({
            id: usuario.id,
            username: usuario.username
        })
    )

    return {
        sucesso: true,
        usuario: usuario
    }
}


// =========================
// USUÁRIO LOGADO
// =========================

function getUsuarioLogado() {

    return JSON.parse(
        localStorage.getItem('usuarioLogado')
    )
}


// =========================
// LOGOUT
// =========================

function logout() {

    localStorage.removeItem('usuarioLogado')

    window.location.href = 'index.html'
}