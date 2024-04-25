import { NavLink, useParams } from 'react-router-dom';
import { SContainer, SFormWrapper } from './AuthPage.styled';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { Button } from '../../components';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useAppDispatch } from '../../hooks';
import { loginThunk, registerThunk } from '../../redux';
import { useState } from 'react';

const AuthPage = () => {
  const { id: pageId } = useParams('id');
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlRegistert = () => {
    const data = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      theme: 'dark',
    };
    dispatch(registerThunk(data));
  };

  const handlLogin = () => {
    const data = {
      email: formData.email,
      password: formData.password,
    };
    dispatch(loginThunk(data));
  };
  return (
    <SContainer>
      <SFormWrapper>
        <nav>
          <ul>
            <li>
              <NavLink to="/auth/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/auth/login">Login</NavLink>
            </li>
          </ul>
        </nav>
        {pageId === 'register' && <RegisterForm handleChange={handleChange} />}
        {pageId === 'login' && <LoginForm />}
        {pageId === 'register' && (
          <Button title="Register Now" icon={false} onClick={handlRegistert} />
        )}
        {pageId === 'login' && (
          <Button title="Log In Now" icon={false} onClick={handlLogin} />
        )}
      </SFormWrapper>
    </SContainer>
  );
};

export default AuthPage;
