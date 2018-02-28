import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Cadastro } from '../Router';

export default props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25 }}>Whatsapp Clone</Text>
        </View>
        <View style={{ flex: 2 }}>
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Senha' />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')}>
                <Text style={{ fontSize: 18 }} >Ainda não tem cadastro? Cadastra-se</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
            <Button title="Acessar" color='#115E54' onPress={() => false } />
        </View>
    </View>

);