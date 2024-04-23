import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";

const { BASENAME = '/' } = import.meta.env;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={BASENAME}>
        <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
