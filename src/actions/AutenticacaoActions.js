import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

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
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => {
            let emailB64 = b64.encode(email);

            firebase.database().ref('/contatos/'+ emailB64)
                .push({ nome })
                .then(value => cadastroUsuarioSucesso(dispatch))
        })
        .catch(erro => cadastroUsuarioErro(erro, dispatch))
    }
    
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ( { type: 'cadastro_usuario_sucesso' } );

    Actions.boasVindas();
}

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
}