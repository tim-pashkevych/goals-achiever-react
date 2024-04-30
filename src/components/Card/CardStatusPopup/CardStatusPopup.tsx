import { useEffect, useRef, useState } from 'react';

import icons from 'assets/sprite.svg';
import { Loader } from '../../Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  moveCardByIdThunk,
  selectColumns,
  selectIsCardLoading,
} from '../../../redux';
import { filterColumns } from '../../../helpers/FilterColumns';

import * as S from './CardStatusPopup.styled';

interface IcolumnList {
  _id: string;
  title: string;
}

export interface StandardComponentProps {
  boardId: string;
  columnId: string;
  id: string;
  isOverdue: boolean;
}
const CardStatusPopup = ({
  columnId,
  boardId,
  id,
  isOverdue,
}: StandardComponentProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const isLoading = useAppSelector(selectIsCardLoading);
  const columns = useAppSelector(selectColumns);
  const filteredColumns = filterColumns(columns, columnId);
  const dispatch = useAppDispatch();

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

  const handleClick = (newColumnId: string) => {
    const data = {
      id,
      newCardBody: {
        columnId,
        boardId,
        newColumnId,
      },
    };
    dispatch(moveCardByIdThunk(data));
    setIsOpened(false);
  };

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
        {filteredColumns.map((el: IcolumnList) => (
          <S.statusButton_button
            key={el._id}
            onClick={() => handleClick(el._id)}
          >
            {el.title}
            <svg width={16} height={16}>
              <use href={`${icons}#icon-normal`}></use>
            </svg>
          </S.statusButton_button>
        ))}
      </S.container_div>

      {isOverdue && (
        <S.iconBell_svg width={16} height={16} $color="lightgreen">
          <use href={`${icons}#icon-bell`}></use>
        </S.iconBell_svg>
      )}
      {isLoading && <Loader />}
    </S.toggleButton_div>
  );
};

export default CardStatusPopup;
