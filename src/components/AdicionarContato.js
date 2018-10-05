import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail } from '../actions/AppActions';

class adicionarContato extends Component {

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', padding: 20  }}>
                <View style={{ flex: 1, justifyContent: 'center'  }}>
                    <TextInput 
                    value={this.props.adiciona_contato_email} 
                    placeholder="E-mail"
                    style={{ fontSize: 20, height: 45  }}
                    onChangeText={ email => this.props.modificaAdicionaContatoEmail(email) }
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Adicionar" color="#115E54" onPress={ () => false } />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email
    }
)

export default connect(mapStateToProps, { modificaAdicionaContatoEmail })(adicionarContato);