import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import 'modern-normalize/modern-normalize.css';
import './index.css';

const { BASENAME = '/' } = import.meta.env;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={BASENAME}>
    <App />
  </BrowserRouter>
);
