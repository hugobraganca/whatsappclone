import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormCadastro from './components/FormCadastro';
import FormLogin from './components/FormLogin';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';


export default props => (
  <Router>
    <Scene key='root'>
      <Scene key='formLogin' component={FormLogin} title='Login' />
      <Scene key='formCadastro' component={FormCadastro} title='Cadastro' />
      <Scene key='boasVindas' component={BoasVindas} title='BemVindo' />
      <Scene key='principal' component={Principal} title='Principal' />
    </Scene>
  </Router>
);