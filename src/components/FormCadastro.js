import React from 'react';
import { View, TextInput, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { modificaNome, modificaEmail, modificaSenha } from '../actions/AutenticacaoActions'

const formCadastro = props => (
    <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <TextInput value={props.nome} placeholder='Nome' placeholderTextColor='#fff' style={{ fontSize: 20, height: 45 }} onChangeText={texto => props.modificaNome(texto)} />
                <TextInput value={props.email} placeholder='E-mail' placeholderTextColor='#fff' style={{ fontSize: 20, height: 45 }} onChangeText={texto => props.modificaEmail(texto)} />
                <TextInput secureTextEntry value={props.senha} placeholder='Senha' placeholderTextColor='#fff' style={{ fontSize: 20, height: 45 }} onChangeText={texto => props.modificaSenha(texto)} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title='Cadastrar' color='#115E54' onPress={() => false} />
            </View>
        </View>
    </ImageBackground>
);

const mapStateToProps = state => {
    console.log(state);
    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha
        }

    );
}

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaSenha })(formCadastro);