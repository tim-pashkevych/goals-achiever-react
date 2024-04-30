import { useAppSelector } from '../../hooks';
import { Icon, Image } from '../../components';
import { selectIsUserLoading } from '../../redux';
import { SContainer, SLinkButton, SbuttonsList_ul } from './WelcomePage.styled';

const WelcomePage = () => {
  const isLoading = useAppSelector(selectIsUserLoading);

  const tablet = {
    width: 162,
    height: 162,
  };
  const mobile = {
    width: 124,
    height: 124,
  };

  return (
    !isLoading && (
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
        <SbuttonsList_ul>
          <li>
            <SLinkButton to="/auth/register" aria-label="Link to register">
              Registration
            </SLinkButton>
          </li>
          <li>
            <SLinkButton to="/auth/login" aria-label="Link to login">
              Log in
            </SLinkButton>
          </li>
        </SbuttonsList_ul>
      </SContainer>
    )
  );
};

export default WelcomePage;
