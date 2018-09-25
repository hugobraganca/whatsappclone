import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const formLogin =  props => {
    console.log(props);
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }}>WhatsApp Clone</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TextInput value={props.email} style={{ fontSize: 20, height: 45 }} placeholder='E-mail' onChangeText={ email => props.modificaEmail(email) } />
                <TextInput value={props.senha} style={{ fontSize: 20, height: 45 }} placeholder='Senha' onChangeText={ senha => props.modificaSenha(senha) } />
                <TouchableHighlight onPress={() => Actions.formCadastro() }>
                    <Text style={{ fontSize: 20 }}>Ainda não tem cadastro? Cadastra-se</Text>
                </TouchableHighlight>
            </View>
            <View style={{ flex: 2 }}>
                <Button title="Acessar" color='#115E54' onPress={() => false} />
            </View>
        </View>
    );
}
const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);