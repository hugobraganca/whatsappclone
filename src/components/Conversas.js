import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { conversasUsuarioFetch } from '../actions/AppActions';
import { Actions } from 'react-native-router-flux';

class Conversas extends Component {

    componentWillMount() {
        this.props.conversasUsuarioFetch();
        this.criaFonteDeDados(this.props.conversas);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.conversas);
    }

    criaFonteDeDados(conversas) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(conversas);
    }

    renderRow(conversa) {
        return (
                <TouchableHighlight
                    onPress={() => false}
                    underlayColor='#fff'
                >
                    <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderBottomColor: "#CCC" }}>
                        <Text style={{ fontSize: 18,  }}>{conversa.nome}</Text>
                    </View>
                </TouchableHighlight>
        )
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

mapStateToProps = state => {
    const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
        return { ...val, uid };
    });

    return {
        conversas
    }
}

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas);