import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

//STORE -> GLOBALIZED STATE

//ACTION
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

//REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

let store = createStore(counterReducer);

// THIS IS NOT HOW WE ARE GONNA DO IT IN REACT BUT WHATEVER
store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
