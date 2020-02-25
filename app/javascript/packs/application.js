import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from '../App';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root'),
  );
});
