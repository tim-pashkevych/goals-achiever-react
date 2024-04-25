import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '../hooks';
import { selectIsLoggedIn } from '../redux';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate state={{ from: location }} to={'/welcome'} />
  );
};
