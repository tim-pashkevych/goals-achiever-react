import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import { Container, Loader } from '../index';
import { SLayout } from './Layout.styled';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { refreshThunk, selectIsLoggedIn } from '../../redux';
import { selectRefreshToken } from '../../redux/auth/slice';

export const Layout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const rToken = useAppSelector(selectRefreshToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) return;
    dispatch(refreshThunk({ refreshToken: rToken }));
  });

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
