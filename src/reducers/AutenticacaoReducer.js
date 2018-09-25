const INITIAL_STATE = {
    nome: 'Hugo',
    email: 'hugobraganca94@gmail.com',
    senha: '123456'
}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case 'modifica_nome':
            return { ...state, nome: action.payload }
        case 'modifica_email':
            return { ...state, email: action.payload }
        case 'modifica_senha':
            return { ...state, senha: action.payload }
    }
    return state;
}