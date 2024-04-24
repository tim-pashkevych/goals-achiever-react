import { NavLink } from 'react-router-dom';
import { SContainer, SFormWrapper } from './AuthPage.styled';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { Button } from '../../components';

const AuthPage = () => {
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
        <RegisterForm />
        <Button />
      </SFormWrapper>
    </SContainer>
  );
};

export default AuthPage;
