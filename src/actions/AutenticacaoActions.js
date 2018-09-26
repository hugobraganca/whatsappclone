import firebase from 'firebase';

export const modificaNome = (nome) => {
    return {
        type: 'modifica_nome',
        payload: nome
    }
}

export const modificaEmail = (email) => {
    return {
        type: 'modifica_email',
        payload: email
    }
}

export const modificaSenha = (senha) => {
    return {
        type: 'modifica_senha',
        payload: senha
    }
}

export const cadastrarUsuario = ({nome, email, senha}) => {
    
    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => cadastroUsuarioSucesso())
        .catch(erro => cadastroUsuarioErro(erro))
}

const cadastroUsuarioSucesso = () => {
    return {
        type: 'sucesso'
    }
}

const cadastroUsuarioErro = (erro) => {
    return {
        type: 'erro'
    }
}