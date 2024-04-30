import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Icon } from '../Icon/Icon';

import {
  SModalButton_button,
  SModalWindow_div,
  SWrapper_div,
} from './Modal.styled';

const modalRoot = document.querySelector('#rootModal');

export const Modal = ({
  children,
  toggleModal,
  previosModal = false,
  padding = '24px',
}) => {
  useEffect(() => {
    if (previosModal) return;
    const handleEscape = (event) => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [toggleModal, previosModal]);

  const handleClick = (event) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <SWrapper_div onClick={handleClick}>
      <SModalWindow_div $padding={padding}>
        <SModalButton_button type="button" onClick={() => toggleModal()}>
          <Icon id={'close'} size={12} />
        </SModalButton_button>
        {children}
      </SModalWindow_div>
    </SWrapper_div>,
    modalRoot
  );
};
