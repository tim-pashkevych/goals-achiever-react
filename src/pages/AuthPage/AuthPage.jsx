import { NavLink } from 'react-router-dom';
import { SContainer, SFormWrapper } from './AuthPage.styled';

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
      </SFormWrapper>
    </SContainer>
  );
};

export default AuthPage;
