import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import {View,Text} from 'react-native';
import {connect} from 'react-redux'
import {bindDispatch} from '../utils/actions';


class  CreateEmployee extends Component {

  constructor(props) {
    super(props)
  }

  gotoScreen(){
    this.props.actions.getPeople()
    Actions.editEmployee()
  }

  render() {
    return (
      <View>
        <Text onPress={()=>this.gotoScreen()}> go to edit page </Text>
      </View>
    );
  }
};

const mapState=(state)=>{
  return {
    people:state.people
  }
}

export default connect(mapState,bindDispatch)(CreateEmployee)