import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario( { email, senha } );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>WhatsApp Clone</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <TextInput 
                            value={this.props.email} 
                            style={{ fontSize: 20, height: 45, color: '#fff' }} 
                            placeholder='E-mail' 
                            placeholderTextColor='#fff' 
                            onChangeText={ email => this.props.modificaEmail(email) } 
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            style={{ fontSize: 20, height: 45, color: '#fff' }} 
                            placeholder='Senha' 
                            placeholderTextColor='#fff' 
                            onChangeText={ senha => 
                            this.props.modificaSenha(senha) } 
                        />
                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{ this.props.erroLogin }</Text>
                        <TouchableHighlight onPress={() => Actions.formCadastro() }>
                            <Text style={{ fontSize: 20, color: '#fff' }}>Ainda não tem cadastro? Cadastra-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Button 
                            title="Acessar" 
                            color='#115E54' 
                            onPress={() => this._autenticarUsuario()} 
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);