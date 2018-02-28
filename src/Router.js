import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import FormCadastro from './components/FormCadastro';
import FormLogin from './components/FormLogin';


export const Login = StackNavigator({
  FormLogin: {
    screen: FormLogin,
    navigationOptions: {
      title: "Login"
    }
  },
});

export const Cadastro = StackNavigator({
  FormCadastro: {
    screen: FormCadastro,
    navigationOptions: {
      title: "Cadastro"
    }
  },
});