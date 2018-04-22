import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux'
import AppReducer from '../reducers/AppReducer';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

class AdicionarContato extends Component {

    renderAdicionaContato() {
        if (!this.props.cadastro_usuario_inclusao) {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TextInput
                            placeholder='E-mail'
                            style={{ fontSize: 20, height: 45 }}
                            onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
                            value={this.props.adiciona_contato_email}
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Button title="Adicionar" color="#115E54" onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)} />
                        <Text style={{ color: '#ff0000', fontSize: 20 }}>
                            {this.props.cadastro_resultado_txt_erro}
                        </Text>
                    </View>
                </View>

            );
        } else {
            return (
                <View>
                    <Text style={{ fontSize: 20 }}>
                        Cadastro realizado com sucesso!
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
            { this.renderAdicionaContato() }
            </View>
        );
    }
}



const mapStateToProps = state => (
    {
        adiciona_contato_email: state.appReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.appReducer.cadastro_resultado_txt_erro,
        cadastro_usuario_inclusao: state.appReducer.cadastro_usuario_inclusao
    }
);

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);