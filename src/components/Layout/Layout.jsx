import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../.././styles/GlobalStyle.js';
import { theme } from '../.././styles/theme';
import { Container, Loader } from '../index';
import { SLayout } from './Layout.styled';
import { useAppDispatch, useAppSelector, useLocalStorage } from '../../hooks';
import { fetchUserThunk, refreshThunk, selectIsLoggedIn } from '../../redux';
import {
  selectFirstLoad,
  selectRefreshToken,
  selectTheme,
} from '../../redux/auth/slice';
import { toast } from 'react-toastify';

export const Layout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const color = useAppSelector(selectTheme) || 'light';
  const [isUploadApp, setIsUploadApp] = useState(true);
  const firstLoad = useAppSelector(selectFirstLoad);
  const rToken = useAppSelector(selectRefreshToken);
  const dispatch = useAppDispatch();
  const [activeBoardId] = useLocalStorage('activeBoardId', '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUploadApp) return;
    const controller = new AbortController();

    dispatch(
      refreshThunk({
        data: { refreshToken: rToken },
        signal: controller.signal,
      })
    )
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
        if (error === 'canceled')
          toast.warn(
            'Please wait, we use free servers for the back end and they need time to wake up'
          );
        toast.error(error.message);
      });
    setTimeout(() => {
      controller.abort();
    }, 5000);
    setIsUploadApp(false);
  }, [dispatch, navigate, rToken, activeBoardId, isUploadApp]);

  return (
    <ThemeProvider theme={theme[color]}>
      <GlobalStyle />
      <SLayout $isLoggedIn={isLoggedIn}>
        <Container>
          <Suspense fallback={<Loader />}>
            {firstLoad && <Loader />}
            {!firstLoad && <Outlet />}
          </Suspense>
        </Container>
      </SLayout>
    </ThemeProvider>
  );
};
