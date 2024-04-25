import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '../hooks';
import { selectIsLoggedIn } from '../redux';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const location = useLocation();

  return isLoggedIn ? <Navigate to={location.state?.from || '/'} /> : children;
};
