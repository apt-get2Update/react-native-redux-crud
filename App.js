import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux';
import createStore from './src/configureStore';
// import Container from './Container';
import firebase from 'firebase';
import RouterComponent from './src/Router';

const store=createStore();

export default class App extends React.Component {
  
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBnptYtln7lO6-palhn1QGrkIw1hsMc1sE",
      authDomain: "redux-crud-67e8b.firebaseapp.com",
      databaseURL: "https://redux-crud-67e8b.firebaseio.com",
      projectId: "redux-crud-67e8b",
      storageBucket: "",
      messagingSenderId: "799150356319"
    };
    firebase.initializeApp(config);
  }

  render() {  
    return (
      <Provider store={store}>  
        <RouterComponent/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
