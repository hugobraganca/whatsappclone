import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const formLogin = props => {
    console.log(props);
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }}>Whatsapp Clone</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TextInput value={props.email} style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
                <TextInput value={props.senha} style={{ fontSize: 20, height: 45 }} placeholder='Senha' />
                <TouchableOpacity onPress={() => Actions.formCadastro()}>
                    <Text style={{ fontSize: 18 }} >Ainda não tem cadastro? Cadastra-se</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 2 }}>
                <Button title="Acessar" color='#115E54' onPress={() => false} />
            </View>
        </View>
    );
}

mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, null)(formLogin);