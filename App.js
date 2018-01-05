import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux';
import createStore from './src/configureStore';
import Container from './Container';
const store=createStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>  
        <Container/>
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
