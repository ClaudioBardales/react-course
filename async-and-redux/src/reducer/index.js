import counterReducer from '../reducer/counter';
import loggedReducer from '../reducer/isLogged';
import { combinedReducers } from 'redux';

const allReducers = combinedReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
