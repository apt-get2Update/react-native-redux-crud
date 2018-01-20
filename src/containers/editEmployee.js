import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import {View,Text} from 'react-native';

class  EditEmployee extends Component {

  constructor(props) {
    super(props)
  }

  gotoScreen(){
    Actions.createEmployee()
  }

  render() {
    return (
      <View>
        <Text onPress={()=>this.gotoScreen()}> go to edit createPage </Text>
      </View>
    );
  }
};

export default EditEmployee;