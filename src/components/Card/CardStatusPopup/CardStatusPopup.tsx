import { useEffect, useRef, useState } from 'react';

import icons from 'assets/sprite.svg';
import * as S from './CardStatusPopup.styled';

enum Status {
  Done = 'Done',
  InProgress = 'In progress',
}

const CardStatusPopup = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [status, setStatus] = useState(Status.InProgress);

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.toggleButton_div role="button" ref={popupRef}>
      <S.popupIcon_svg
        width={16}
        height={16}
        onClick={() => setIsOpened(!isOpened)}
      >
        <use href={`${icons}#icon-normal`}></use>
      </S.popupIcon_svg>

      <S.container_div $isOpened={isOpened}>
        <S.statusButton_button
          $isActive={status === Status.InProgress}
          onClick={() => {
            setStatus(Status.InProgress);
            setIsOpened(false);
          }}
        >
          {Status.InProgress}
          <svg width={16} height={16}>
            <use href={`${icons}#icon-normal`}></use>
          </svg>
        </S.statusButton_button>
        <S.statusButton_button
          $isActive={status === Status.Done}
          onClick={() => {
            setStatus(Status.Done);
            setIsOpened(false);
          }}
        >
          {Status.Done}
          <svg width={16} height={16}>
            <use href={`${icons}#icon-normal`}></use>
          </svg>
        </S.statusButton_button>
      </S.container_div>

      {status !== Status.Done && (
        <S.iconBell_svg width={16} height={16} $color="lightgreen">
          <use href={`${icons}#icon-bell`}></use>
        </S.iconBell_svg>
      )}
    </S.toggleButton_div>
  );
};

export default CardStatusPopup;
