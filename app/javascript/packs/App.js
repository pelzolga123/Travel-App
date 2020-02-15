import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from '../components/Main';
import rootReducers from '../reducers/index';

const DEALS = {
  deal: [
    {
      id: 11,
      deal_name: 'Test deal',
    },
  ],
};

const store = createStore(rootReducers, DEALS);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
