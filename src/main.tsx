import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux';
import App from './App.jsx';

import 'modern-normalize/modern-normalize.css';
import './index.css';

const { BASENAME = '/' } = import.meta.env;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={BASENAME}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
