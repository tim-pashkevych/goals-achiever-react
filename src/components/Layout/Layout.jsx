import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, Loader } from '../index';
import { SLayout } from './Layout.styled';
import { useAppSelector } from '../../hooks';
import { selectIsLoggedIn } from '../../redux';

export const Layout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <SLayout $isLoggedIn={isLoggedIn}>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </SLayout>
  );
};
