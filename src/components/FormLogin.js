import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const formLogin =  props => {
    console.log(props);
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')}>
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, color: '#fff' }}>WhatsApp Clone</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput value={props.email} style={{ fontSize: 20, height: 45, color: '#fff' }} placeholder='E-mail' placeholderTextColor='#fff' onChangeText={ email => props.modificaEmail(email) } />
                    <TextInput secureTextEntry value={props.senha} style={{ fontSize: 20, height: 45, color: '#fff' }} placeholder='Senha' placeholderTextColor='#fff' onChangeText={ senha => props.modificaSenha(senha) } />
                    <TouchableHighlight onPress={() => Actions.formCadastro() }>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Ainda não tem cadastro? Cadastra-se</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 2 }}>
                    <Button title="Acessar" color='#115E54' onPress={() => false} />
                </View>
            </View>
        </ImageBackground>
    );
}
const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);