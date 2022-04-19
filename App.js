import React from 'react';
import NavProviders from './src/navigation';
import {Provider} from 'react-redux';
import store from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <NavProviders />
    </Provider>
  );
};

export default App;
