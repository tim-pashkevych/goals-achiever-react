import { useCallback, useState } from 'react';

import { Icon } from '../Icon/Icon';
import { Loader } from '../Loader/Loader';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { UserProfile } from './User/UserProfile';
import { SidebarModal } from './SidebarModal/SidebarModal.jsx';

import { SButton_button, SHeader_header } from './Header.styled';

export const Header = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpenSidebar(!isOpenSidebar);
  }, [isOpenSidebar]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleSidebar();
    }
  };

  return (
    <SHeader_header>
      {isOpenSidebar && (
        <SidebarModal
          handleBackdropClick={handleBackdropClick}
          toggleSidebar={toggleSidebar}
        />
      )}
      <SButton_button onClick={toggleSidebar}>
        <Icon id={'menu'} />
      </SButton_button>
      <ThemeSwitcher setIsLoading={setIsLoading} />
      <UserProfile />
      {isLoading && <Loader />}
    </SHeader_header>
  );
};
