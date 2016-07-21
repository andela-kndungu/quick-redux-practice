import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import { CounterContainer } from './redux/containers';

render(
  <Provider store={store}>
  <CounterContainer />
  </Provider>, document.getElementById('app')
);

