import { Icon } from '../Icon/Icon';
import { SButton_button, SHeader_header } from './Header.styled';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { UserProfile } from './User/UserProfile';

export const Header = () => {
  return (
    <SHeader_header>
      <SButton_button>
        <Icon id={'menu'} />
      </SButton_button>
      <ThemeSwitcher />
      <UserProfile />
    </SHeader_header>
  );
};
