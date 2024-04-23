import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/index.js';
import { ThemeProvider } from './components/index.js';
import App from './App.jsx';

import './styles/variables.css';
import 'modern-normalize/modern-normalize.css';

const { BASENAME = '/' } = import.meta.env;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <BrowserRouter basename={BASENAME}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);
