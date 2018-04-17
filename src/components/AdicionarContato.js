import React from 'react';
import  { View, TextInput, Button } from 'react-native';
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
        </View>
    </View>
);

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.appReducer.adiciona_contato_email
    }
);

export default connect(mapStateToProps, {modificaAdicionaContatoEmail, adicionaContato})(AdicionarContato);