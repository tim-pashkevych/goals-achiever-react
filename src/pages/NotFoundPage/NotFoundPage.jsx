import { SContainer, SLinkButton } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <SContainer>
      <h1>404</h1>
      <h2>Not found</h2>
      <SLinkButton to="/" aria-label="Navigate to Home page">
        Home page
      </SLinkButton>
    </SContainer>
  );
};

export default NotFoundPage;
