import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, antenticarUsuario } from '../actions/AutenticacaoActions';

class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.antenticarUsuario({ email, senha });
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>Whatsapp Clone</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <TextInput value={this.props.email} style={{ fontSize: 20, height: 45 }} placeholder='E-mail' placeholderTextColor='#fff' onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput secureTextEntry value={this.props.senha} style={{ fontSize: 20, height: 45 }} placeholder='Senha' placeholderTextColor='#fff' onChangeText={texto => this.props.modificaSenha(texto)} />
                        <TouchableOpacity onPress={() => Actions.formCadastro()}>
                            <Text style={{ fontSize: 18, color: '#fff' }} >Ainda não tem cadastro? Cadastra-se</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Button title="Acessar" color='#115E54' onPress={() => this._autenticarUsuario()} />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha, antenticarUsuario })(formLogin);