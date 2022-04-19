import React from 'react';
import NavProviders from './src/navigation';
import {Provider} from 'react-redux';
import store, {persistor} from 'store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavProviders />
      </PersistGate>
    </Provider>
  );
};

export default App;
