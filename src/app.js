import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore'
import { startSetTrades } from './actions/trades';
import getVisibleTrades from './selectors/trades';
import LoadingPage from './components/LoadingPage';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true
  }
}

store.dispatch(startSetTrades()).then(() => {
  renderApp();
  if (history.location.pathname === '/') {
    history.push('/dashboard');
  }
});
