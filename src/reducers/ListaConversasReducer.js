import { LISTA_CONVERSAS_USUARIO } from '../actions/types';
const INTIAL_STATE = {};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case LISTA_CONVERSAS_USUARIO:
            return action.payload;
        default: 
            return state;
    }
}