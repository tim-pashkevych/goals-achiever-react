import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, Loader } from '../index';

export const Layout = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
