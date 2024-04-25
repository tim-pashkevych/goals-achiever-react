import { lazy, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './styles/variables.css';
import 'modern-normalize/modern-normalize.css';
import { GlobalStyle } from './styles/GlobalStyle.js';

import { theme } from './styles/theme';
import { Layout, ThemeContext } from './components';
import { PrivateRoute } from './routes/PrivateRoute.jsx';
import { PublicRoute } from './routes/PublicRoute.jsx';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage/AuthPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const ScreensPage = lazy(() => import('./pages/ScreensPage/ScreensPage.jsx'));

const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

function App() {
  const { theme: color } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme[color]}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Navigate to={'/home'} />
              </PrivateRoute>
            }
          />
          <Route
            path="/welcome"
            element={
              <PublicRoute>
                <WelcomePage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/auth/:id"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route path="/home" element={<HomePage />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <ScreensPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/home/:boardName"
              element={
                <PrivateRoute>
                  <ScreensPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
