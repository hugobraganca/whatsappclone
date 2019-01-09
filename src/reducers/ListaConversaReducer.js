import { LISTA_CONVERSA_USUARIO } from '../actions/types';
const INTIAL_STATE = {};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case LISTA_CONVERSA_USUARIO:
            return action.payload
        default: 
            return state;
    }
}