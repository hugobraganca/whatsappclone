import React from 'react';
import  { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux'
import AppReducer from '../reducers/AppReducer';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

const AdicionarContato = props => (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput 
                placeholder='E-mail'
                style={{ fontSize: 20, height: 45 }}
                onChangeText={ (texto) => props.modificaAdicionaContatoEmail(texto) }
                value={props.adiciona_contato_email}
            />
        </View>

        <View style={{ flex: 1 }}>
            <Button title="Adicionar" color="#115E54" onPress={ () => props.adicionaContato(props.adiciona_contato_email) } />
            <Text style={{ color: '#ff0000', fontSize: 20}}>
                {props.cadastro_resultado_txt_erro}
            </Text>
        </View>
    </View>
);

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.appReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.appReducer.cadastro_resultado_txt_erro
    }
);

export default connect(mapStateToProps, {modificaAdicionaContatoEmail, adicionaContato})(AdicionarContato);