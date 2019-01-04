import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {

    constructor(props) {
        super(props)

    }

    componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criaFonteDeDados(this.props.contatos);
        // console.log( 'recuperado via props: ',this.props.contatos)
    }

    componentWillReceiveProps(nextProps) {
        // console.log('Recuperado via props após update: ',nextProps.contatos)
        this.criaFonteDeDados(nextProps.contatos);
    }

    criaFonteDeDados( contatos ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2})

        this.fonteDeDados = ds.cloneWithRows(contatos)
    }

    render() {
        return(
            <ListView 
                enableEmptySections
                dataSource={this.fonteDeDados}
                renderRow={ data => (
                        <View>
                            <Text>{data.nome}</Text>
                            <Text>{data.email}</Text>
                        </View>
                    )
                }
            />
        );
    }
}

const mapStateToProps = state => {
    console.log(state.ListaContatosReducer);
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid }
    })
    return { contatos: contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);

    