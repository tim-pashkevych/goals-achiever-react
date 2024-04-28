import { useState } from 'react';

export const useModal = (): [boolean, (isOpen?: boolean) => void] => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = (isOpen: boolean = !isOpenModal) => {
    setIsOpenModal(isOpen);
  };
  return [isOpenModal, toggleModal];
};
