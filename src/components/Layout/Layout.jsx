import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, Header, Loader } from '../index';
import { SLayout } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = false;

  return (
    <SLayout $isLoggedIn={isLoggedIn}>
      <Container>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </SLayout>
  );
};
