import { lazy, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './styles/variables.css';
import 'modern-normalize/modern-normalize.css';
import { GlobalStyle } from './styles/GlobalStyle.js';

import { theme } from './styles/theme';
import { Layout, ThemeContext } from './components';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage/AuthPage.jsx'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

function App() {
  const { theme: color } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme[color]}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
