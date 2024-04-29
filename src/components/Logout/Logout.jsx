import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutThunk, selectIsUserLoading } from '../../redux';
import { Loader } from '../Loader/Loader';

import { SDiv, Sp, SDiv_Button, SButton } from './Logout.styled';

export const Logout = ({ toggleModal }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector(selectIsUserLoading);

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        navigate('/');
        toggleModal();
        toast.warning('In order to use the application you must log in.');
      })
      .catch(() => {
        toast.error('Sorry, something went wrong. Please try again later.');
      });
  };

  return (
    <SDiv>
      <Sp>Are you sure you want to log out?</Sp>
      <SDiv_Button>
        <SButton type="button" onClick={handleLogout} disabled={isLoading}>
          Log out
        </SButton>
        <SButton type="button" onClick={() => toggleModal()}>
          Cancel
        </SButton>
      </SDiv_Button>
      {isLoading && <Loader />}
    </SDiv>
  );
};
