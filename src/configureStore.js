import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


export default function configureStoreProd(initialState) {
  const middlewares = [
    thunk,
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}