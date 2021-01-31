import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Provider store={store}>
        <PersistGate loading={'Loading...'} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


