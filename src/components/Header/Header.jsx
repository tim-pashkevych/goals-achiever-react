import { useCallback, useEffect, useState } from 'react';

import { Icon } from '../Icon/Icon';
import { Sidebar } from '../Sidebar/Sidebar';
import { Loader } from '../Loader/Loader';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { UserProfile } from './User/UserProfile';

import { SButton_button, SHeader_header, SDiv_Backdrop } from './Header.styled';

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

  useEffect(() => {
    const handleKeydown = (event) => {
      const { code } = event;
      if (code === 'Escape') toggleSidebar();
    };
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [toggleSidebar]);

  return (
    <SHeader_header>
      {isOpenSidebar && (
        <SDiv_Backdrop onClick={handleBackdropClick}>
          <Sidebar className="sidebarHeader" />
        </SDiv_Backdrop>
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
