import {combineReducers} from 'redux';
import people from './people';
import userAuth from './userAuth'

export  * from './people';
export * from './userAuth';

const rootReducer =	combineReducers({
	people,
	userAuth,
});

export default rootReducer;