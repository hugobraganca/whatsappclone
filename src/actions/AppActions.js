import firebase from 'firebase';
import b64 from 'base-64';

import { MODIFICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO } from './types';


export const modificaAdicionaContatoEmail = (texto) => {
    console.log("chegamos aqui!!");
    console.log(texto);
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    }
}

export const adicionaContato = email => {
    return dispatch => {
        let emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    console.log('Usuário existe');
                } else {
                    dispatch({type: ADICIONA_CONTATO_ERRO, payload: 'E-mail informado não corresponde a um usuário válido!' })
                }
            })
    }
}
