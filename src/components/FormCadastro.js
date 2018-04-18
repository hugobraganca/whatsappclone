import React, { Component } from 'react';
import { View, TextInput, Button, ImageBackground, Text, ActivityIndicator, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { modificaNome, modificaEmail, modificaSenha, cadastraUsuario } from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario() {

        const nome = this.props.nome;
        const email = this.props.email;
        const senha = this.props.senha;
        // const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastrar() {
        if(this.props.loading_cadastro) {
            return(
            <ActivityIndicator size = "large" />
        );
        }
        return(
            <Button title="Cadastrar" color='#115E54' onPress={() => this._cadastraUsuario()} />
        );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                <StatusBar backgroundColor="#114D44" />
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput value={this.props.nome} placeholder='Nome' placeholderTextColor='#fff' style={{ fontSize: 20, height: 45 }} onChangeText={texto => this.props.modificaNome(texto)} />
                        <TextInput value={this.props.email} placeholder='E-mail' placeholderTextColor='#fff' style={{ fontSize: 20, height: 45 }} onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput secureTextEntry value={this.props.senha} placeholder='Senha' placeholderTextColor='#fff' style={{ fontSize: 20, height: 45 }} onChangeText={texto => this.props.modificaSenha(texto)} />
                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroCadastro}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderBtnCadastrar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha,
            erroCadastro: state.AutenticacaoReducer.erroCadastro,
            loading_cadastro: state.AutenticacaoReducer.loading_cadastro
        }

    );
}

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaSenha, cadastraUsuario })(formCadastro);