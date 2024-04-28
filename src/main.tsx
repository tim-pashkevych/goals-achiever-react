import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store, persistor } from './redux/index.js';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/goals-achiever-react">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer
          theme="dark"
          style={{ zIndex: 99999 }}
          autoClose={2000}
        />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
