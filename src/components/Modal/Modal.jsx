import { useEffect } from 'react';
import { createPortal } from 'react-dom';
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
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
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
      <SModalWindow_div padding={padding}>
        <SModalButton_button onClick={toggleModal}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 1.5L1.5 10.5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.5 1.5L10.5 10.5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </SModalButton_button>
        {children}
      </SModalWindow_div>
    </SWrapper_div>,
    modalRoot
  );
};
