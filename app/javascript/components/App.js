import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Main from './Main';
import rootReducers from '../reducers/index';


const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
