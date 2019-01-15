import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { 
    MODIFICA_EMAIL, 
    MODIFICA_NOME, 
    MODIFICA_SENHA, 
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
   } from './types';

export const modificaNome = (nome) => {
    return {
        type: MODIFICA_NOME,
        payload: nome
    }
}

export const modificaEmail = (email) => {
    return {
        type: MODIFICA_EMAIL,
        payload: email
    }
}

export const modificaSenha = (senha) => {
    return {
        type: MODIFICA_SENHA,
        payload: senha
    }
}

var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: 'https://whatsapp-clone-82626.firebaseapp.com',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.whatsappclone',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'whatsappcloneteste.page.link'
  };

export const cadastrarUsuario = ({nome, email, senha}) => {
    return dispatch => {

        dispatch({type: CADASTRO_EM_ANDAMENTO})

        enviarEmailParaUsuario(email);

        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(user => {
            let emailB64 = b64.encode(email);

            firebase.database().ref(`/contatos/${emailB64}`)
                .push({ nome })
                .then(value => cadastroUsuarioSucesso(dispatch))
        })
        .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
    
}

const enviarEmailParaUsuario = (email) => {
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(function() {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            console.log(email);
            console.log(actionCodeSettings);
            window.localStorage.setItem('emailForSignIn', email);
        })
        .catch(function(error) {
            // Some error occurred, you can inspect the code: error.code
            console.log(error);
        });
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ( { type: CADASTRO_USUARIO_SUCESSO } );

    Actions.boasVindas();
}

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
}

export const autenticarUsuario = ({ email, senha }) => {
    return dispatch => {

        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(erro => loginUsuarioErro(erro, dispatch));
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch ({ type: LOGIN_USUARIO_SUCESSO });
    Actions.principal();
}

const loginUsuarioErro = (erro, dispatch) => {
    dispatch (
        { 
            type: LOGIN_USUARIO_ERRO, 
            payload: erro.message }) ;
}