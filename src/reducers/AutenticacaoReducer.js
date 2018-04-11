const INICIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: ''
}

export default (state = INICIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'modifica_nome':
            return { ...state, nome: action.payload }
        case 'modifica_email':
            return { ...state, email: action.payload }
        case 'modifica_senha':
            return { ...state, senha: action.payload }
        case 'cadastro_usuario_erro':
            return { ...state, erroCadastro: action.payload }
        case 'cadastra_usuario_sucesso':
            return { ...state, nome: '', senha: '' }
        case 'login_usuario_erro':
            return { ...state, erroLogin: action.payload }
        default:
            return state;
    }
}