import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function configureStore(){
	let store =createStore(reducer,applyMiddleware(thunk))
	return store;
} 