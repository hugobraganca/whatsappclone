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