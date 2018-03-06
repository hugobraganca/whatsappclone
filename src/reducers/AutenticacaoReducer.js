const INICIAL_STATE = {
    nome: 'Hugo',
    email: 'hugbraganca94@gmail.com',
    senha: '123456'   
}

export default  (state = INICIAL_STATE, action) => {
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