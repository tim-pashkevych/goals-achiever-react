import { SHeader_header } from './Header.styled';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';

export const Header = () => {
  return (
    <SHeader_header>
      <ThemeSwitcher />
    </SHeader_header>
  );
};
