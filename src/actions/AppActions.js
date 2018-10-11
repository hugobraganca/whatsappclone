import b64 from 'base-64';
import firebase from 'firebase';
import { 
    MODIFICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO
   } from './types';


export const modificaAdicionaContatoEmail = (email) => {
    console.log(email);
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload : email
    }
}

export const adicionaContato = (email) => {

    return dispatch => {
        let emailB64 = b64.encode(email);

        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if(snapshot.val()) {
                    console.log(email);


                    const { currentUser } = firebase.auth();
                    let emailUsuarioB64 = b64.encode(currentUser.email);

                    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                        .push({ email, nome: 'Nome do contato' })
                        .then( () => console.log('Sucesso'))
                        .catch( erro => console.log(erro))
                } else {
                    dispatch(
                        { 
                            type: ADICIONA_CONTATO_ERRO, payload: 'E-mail informado não corresponde a um usuário válido!'
                        }
                        )
                }
            })
        }

}