import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../.././styles/GlobalStyle.js';
import { theme } from '../.././styles/theme';
import { Container, Loader } from '../index';
import { SLayout } from './Layout.styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUserThunk, refreshThunk, selectIsLoggedIn } from '../../redux';
import { selectRefreshToken, selectTheme } from '../../redux/auth/slice';

export const Layout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const rToken = useAppSelector(selectRefreshToken);
  const color = useAppSelector(selectTheme) || 'light';
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) return;
    dispatch(refreshThunk({ refreshToken: rToken }))
      .unwrap()
      .then(() => {
        dispatch(fetchUserThunk());
      });

    //It is important not to add dependencies. It should work only  once
  }, []);

  return (
    <ThemeProvider theme={theme[color]}>
      <GlobalStyle />
      <SLayout $isLoggedIn={isLoggedIn}>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </SLayout>
    </ThemeProvider>
  );
};
