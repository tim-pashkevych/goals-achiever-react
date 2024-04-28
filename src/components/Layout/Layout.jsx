import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../.././styles/GlobalStyle.js';
import { theme } from '../.././styles/theme';
import { Container, Loader } from '../index';
import { SLayout } from './Layout.styled';
import { useAppSelector } from '../../hooks';
import { selectIsLoggedIn } from '../../redux';
import { selectTheme } from '../../redux/auth/slice';

export const Layout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const color = useAppSelector(selectTheme) || 'light';

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
