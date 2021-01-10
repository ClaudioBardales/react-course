import counterReducer from '../reducer/counter';
import loggedReducer from '../reducer/isLogged';
import { combineReducer, combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
