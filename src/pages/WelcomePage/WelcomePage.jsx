import { Icon, Image } from '../../components';
import { SContainer, SLinkButton } from './WelcomePage.styled';

const WelcomePage = () => {
  const tablet = {
    width: 162,
    height: 162,
  };
  const mobile = {
    width: 124,
    height: 124,
  };

  return (
    <SContainer>
      <Image
        desktop={tablet}
        tablet={tablet}
        mobile={mobile}
        type="image/png"
        pathKey="hero"
        alt="Boy working on laptop"
      />
      <h1>
        <Icon id="logo" size={48} /> Task Pro
      </h1>
      <p>
        {
          "Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"
        }
      </p>
      <ul>
        <li>
          <SLinkButton href="auth/register" aria-label="Link to register">
            Registration
          </SLinkButton>
        </li>
        <li>
          <a href="auth/login" aria-label="Link to login">
            Log in
          </a>
        </li>
      </ul>
    </SContainer>
  );
};

export default WelcomePage;
