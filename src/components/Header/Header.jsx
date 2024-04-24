import { SHeader_header } from './Header.styled';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { UserProfile } from './User/UserProfile';

export const Header = () => {
  return (
    <SHeader_header>
      <ThemeSwitcher />
      <UserProfile />
    </SHeader_header>
  );
};
