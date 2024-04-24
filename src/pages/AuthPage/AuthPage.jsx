import { useParams } from 'react-router-dom';
import { SContainer } from './AuthPage.styled';

const AuthPage = () => {
  const { id } = useParams();

  return <SContainer>{id}</SContainer>;
};

export default AuthPage;
