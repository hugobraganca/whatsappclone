import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { View, Text, TextInput, Image, TouchableHighlight } from 'react-native';
import { modificaMensagem, enviarMensagem, conversaUsuaruietch } from '../actions/AppActions';

class Conversa extends Component {

    componentWillMount() {
        this.props.conversaUsuaruietch(this.props.contatoEmail);
    }

    _enviarMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;

        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#EEE4DC', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20,  }}></View>
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput
                    value={this.props.mensagem}
                    onChangeText={texto => this.props.modificaMensagem(texto)}
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 18, borderRadius: 5 }}
                    />
                    <TouchableHighlight style={{borderRadius: 50}} onPress={this._enviarMensagem.bind(this)} underlayColor='#fff'>
                        <Image source={require('../imgs/enviar_mensagem.png')} /> 
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

mapStateToProps = state => {

    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid };
    });

    console.log(conversa);
    
    return ({
        conversa,
        mensagem: state.AppReducer.mensagem

    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem, conversaUsuaruietch })(Conversa)