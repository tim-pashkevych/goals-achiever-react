import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../../hooks';
import { logoutThunk } from '../../redux';

import { SDiv, Sp, SDiv_Button, SButton } from './Logout.styled';

export const Logout = ({ toggleModal }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        navigate('/');
        toggleModal();
        toast.warning('In order to use the application you must log in');
      })
      .catch(() => {
        toast.error('Oops... Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
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
    </SDiv>
  );
};
