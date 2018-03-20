const INICIAL_STATE = {
    nome: '',
    email: '',
    senha: ''   
}

export default  (state = INICIAL_STATE, action) => {
    console.log(action);
    if(action.type == 'modifica_nome'){
        return { ...state, nome: action.payload }
    }
    if(action.type == 'modifica_email'){
        return { ...state, email: action.payload }
    }
    if(action.type == 'modifica_senha'){
        return { ...state, senha: action.payload}
    }
    return state;
}