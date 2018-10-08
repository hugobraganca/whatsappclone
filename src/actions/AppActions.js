import b64 from 'base-64';
import firebase from 'firebase';
import { 
    MODIFICA_ADICIONA_CONTATO_EMAIL
   } from './types';


export const modificaAdicionaContatoEmail = (email) => {
    console.log(email);
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload : email
    }
}

export const adicionaContato = (email) => {
    console.log(email);
    let emailB64 = b64.encode(email);

    firebase.database().ref(`/contatos/${emailB64}`)
        .once('value')
        .then(snapshot => {
            if(snapshot.val()) {
                console.log('Usuário existe');
            } else {
                console.log("Usuário não existe");
            }
        })
    return {
        type : 'teste'
    }
}