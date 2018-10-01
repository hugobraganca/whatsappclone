import React, { Component } from 'react';
import { View, TextInput, Button, ImageBackground, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaNome, 
    modificaEmail, 
    modificaSenha,
    cadastrarUsuario
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastrarUsuario() {
        const { nome, email, senha } = this.props;
        // const nome = this.props.nome;
        // const email = this.props.email;
        // const senha = this.props.senha;

        this.props.cadastrarUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if(this.props.loading_cadastro) {
            return(
                <ActivityIndicator size="large" />
            );
        }
        return(
            <Button title="Cadastrar" color='#115E54' onPress={() => this._cadastrarUsuario()} />
        );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10}}>
                    <View style={{flex: 4, justifyContent: 'center' }}>
                        <TextInput 
                            value={this.props.nome} 
                            placeholder='Nome' 
                            style={{ fontSize: 20, height: 45, color: '#fff' }} 
                            placeholderTextColor='#fff' 
                            onChangeText={ nome => this.props.modificaNome(nome)}
                        />
                        <TextInput 
                            value={this.props.email} 
                            placeholder='E-mail' 
                            style={{ fontSize: 20, height: 45, color: '#fff' }} 
                            placeholderTextColor='#fff' 
                            onChangeText={ email => this.props.modificaEmail(email)}
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            placeholder='Senha' 
                            style={{ fontSize: 20, height: 45, color: '#fff' }} 
                            placeholderTextColor='#fff' 
                            onChangeText={ senha => this.props.modificaSenha(senha)}
                        />
                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{ this.props.erroCadastro }</Text>
                    </View>
                    <View style={{flex: 1 }}>
                        {this.renderBtnCadastro()}
                    </View>
                </View>
            </ImageBackground>
        );
    }  
}

const mapStateToProps = state =>(
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro
    }
)

export default connect(
    mapStateToProps, 
    { 
        modificaNome, 
        modificaEmail, 
        modificaSenha,
        cadastrarUsuario
    }
)(formCadastro);