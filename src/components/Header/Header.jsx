import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { Loader } from '../Loader/Loader';
import { SButton_button, SHeader_header } from './Header.styled';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { UserProfile } from './User/UserProfile';

export const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SHeader_header>
      <SButton_button>
        <Icon id={'menu'} />
      </SButton_button>
      <ThemeSwitcher setIsLoading={setIsLoading} />
      <UserProfile />
      {isLoading && <Loader />}
    </SHeader_header>
  );
};
