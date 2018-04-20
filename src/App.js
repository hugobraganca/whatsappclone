import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as firebase from "firebase";
import 'firebase/firestore';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD2HnYMmZH7bBuFajXImnPlChNpBY8zG1s",
      authDomain: "whatsapp-clone-82626.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-82626.firebaseio.com",
      projectId: "whatsapp-clone-82626",
      storageBucket: "whatsapp-clone-82626.appspot.com",
      messagingSenderId: "222386931042"
    };

    //firebase.initializeApp(config);
    !firebase.apps.length
      ? firebase.initializeApp(config).firestore()
      : firebase.app().firestore();
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }

}


export default App;