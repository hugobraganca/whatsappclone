import b64 from 'base-64';
import firebase from 'firebase';
import _ from 'lodash';
import { 
    MODIFICA_ADICIONA_CONTATO_EMAIL, 
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO,
    LISTA_CONTATO_USUARIO,
    MODIFICA_MENSAGEM,
    LISTA_CONVERSA_USUARIO,
    ENVIA_MENSAGEM_SUCESSO
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

                    //email do contatoque queremos adicionar
                    const dadosUsuario = _.first(_.values(snapshot.val()));

                    //email do contato que queremos
                    const { currentUser } = firebase.auth();
                    let emailUsuarioB64 = b64.encode(currentUser.email);

                    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                        .push({ email, nome: dadosUsuario.nome })
                        .then( () => adicionaContatoSucesso(dispatch))
                        .catch( erro => adcionaConatoErro(erro.message, dispatch))
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

const adcionaConatoErro = (erro, dispatch) => (
    dispatch (
        {
            type: ADICIONA_CONTATO_ERRO, 
            payload: erro
        })
)

const adicionaContatoSucesso = (dispatch) => (
    dispatch(
        {
            type: ADICIONA_CONTATO_SUCESSO,
            payload: true
        }
    )
)

export const habilitaInclusaoContato = () => (
    {
        type: ADICIONA_CONTATO_SUCESSO,
        payload: false
    }
)

export const contatosUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        let emailUsuarioB64 = b64.encode( currentUser.email );

        firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
            .on("value", snapshot => {
                dispatch({ type: LISTA_CONTATO_USUARIO, payload: snapshot.val() })
            })
    }
}

export const modificaMensagem = texto => {
    return ({
        type: MODIFICA_MENSAGEM,
        payload: texto
    })

}

export const enviarMensagem = (mensagem, contatoNome, contatoEmail) => {

    // dados contato(contatoNome e contatoEmail)

    //dados usuário (email)
    const { currentUser } = firebase.auth();
    const usuarioEmail = currentUser.email;


    return dispatch => {

        const usuarioEmailB64 = b64.encode(usuarioEmail);
        const contatoEmailB64 = b64.encode(contatoEmail);

        firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
            .push({ mensagem: mensagem, tipo: 'e' })
            .then(() => {
                firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
                .push( { mensagem, tipo: 'r' })
                .then(() => dispatch ({ type: ENVIA_MENSAGEM_SUCESSO }))
            })
            .then(() => { //armazenamento dos cabeçalho
                firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}/${contatoEmailB64}`)
                    .set({ nome: contatoNome, email: contatoEmail })
            })
            .then(()=> { //armazenar o cabeçalho de conversa do contato

                firebase.database().ref(`/contatos/${usuarioEmailB64}`)
                    .once("value")
                    .then(snapshot => {

                        const dadosUsuario = _.first(_.values(snapshot.val()));
                        console.log('snapshot: ' + snapshot.val())
                        console.log('values: '+ _.values(snapshot.val()))
                        console.log('dados usuário: ' + dadosUsuario);

                        firebase.database().ref(`/usuario_conversas/${contatoEmailB64}/${usuarioEmailB64}`)
                            .set({ nome: dadosUsuario.nome, email: usuarioEmail })
                    })
            })
    }
}
export const conversaUsuaruietch = contatoEmail => {

    const { currentUser } = firebase.auth();

    //comport os email na base 64
    let usuarioEmailB64 = b64.encode(currentUser.email)
    let contatoEmailB64 = b64.encode(contatoEmail);
    return dispatch => {
        firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
            .on("value", snapshot => {
                dispatch({ type: LISTA_CONVERSA_USUARIO, payload: snapshot.val() })
            })
    }
}