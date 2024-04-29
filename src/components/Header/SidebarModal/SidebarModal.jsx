import { useEffect } from 'react';

import { Sidebar } from '../../Sidebar/Sidebar';
import { SDiv_Backdrop } from './SidebarModal.styled';

export const SidebarModal = ({ handleBackdropClick, toggleSidebar }) => {
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
    <SDiv_Backdrop onClick={handleBackdropClick}>
      <Sidebar className="sidebarHeader" toggleSidebar={toggleSidebar} />
    </SDiv_Backdrop>
  );
};
