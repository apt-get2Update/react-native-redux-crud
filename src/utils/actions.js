import _ from 'lodash';
import {bindActionCreators} from 'redux';
import * as appActions from '../reducers';

export const bindDispatch = _.memoize(dispatch => ({
  dispatch,
  actions: bindActionCreators(appActions, dispatch)
}));
