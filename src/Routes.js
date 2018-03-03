import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormCadastro from './components/FormCadastro';
import FormLogin from './components/FormLogin';


export default props => (
  <Router>
    <Scene key='root'>
      <Scene key='formLogin' component={FormLogin} title='Login' />
      <Scene key='formCadastro' component={FormCadastro} title='Cadastro' />
    </Scene>
  </Router>
);