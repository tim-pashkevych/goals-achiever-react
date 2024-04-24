import { useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = (isOpen = !isOpenModal) => {
    setIsOpenModal(isOpen);
  };
  return [isOpenModal, toggleModal];
};
