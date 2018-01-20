import React, { Component } from 'react';
import { Router, Scene ,Actions } from 'react-native-router-flux';

import CreateEmployee from './containers/createEmploye';
import EmployeeEdit from './containers/editEmployee';

class  RouterComponent extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 25 }}>
        <Scene key="root">
          <Scene key='editEmployee' component={EmployeeEdit} title='employee Edit' />
          <Scene key='createEmployee' component={CreateEmployee} title='employee create' initial />
        </Scene>
      </Router>
    );
  }
};

export default RouterComponent;
