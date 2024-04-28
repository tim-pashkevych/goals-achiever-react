import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './styles/variables.css';
import 'modern-normalize/modern-normalize.css';

import { Layout } from './components';
import { PrivateRoute } from './routes/PrivateRoute.jsx';
import { PublicRoute } from './routes/PublicRoute.jsx';
import { useAppDispatch, useAppSelector, useLocalStorage } from './hooks/';
import {
  fetchUserThunk,
  refreshThunk,
  selectIsLoggedIn,
  selectRefreshToken,
} from './redux';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage/AuthPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const ScreensPage = lazy(() => import('./pages/ScreensPage/ScreensPage.jsx'));

const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

function App() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const rToken = useAppSelector(selectRefreshToken);
  const dispatch = useAppDispatch();
  const [activeBoardId] = useLocalStorage('activeBoardId', '');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) return;

    dispatch(refreshThunk({ refreshToken: rToken }))
      .unwrap()
      .then(() => {
        dispatch(fetchUserThunk({ boardId: activeBoardId }))
          .unwrap()
          .then(({ result }) => {
            const activeBoard = result.boards.find((board) => board.active);
            if (activeBoard) {
              navigate(`/home/${activeBoard.title}`);
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });

    //It is important not to add dependencies. It should work only  once
  }, [dispatch, navigate, isLoggedIn, rToken, activeBoardId]);

  return (
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
  );
}

export default App;
