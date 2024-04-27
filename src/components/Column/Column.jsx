import {
  SButtonWrapper,
  SCardWrapper,
  SCardWrapperScroll,
  SColumnName,
  SColumnWrapper,
  SIcon,
  SIconsWrapper,
} from './Column.styled';

import { Button } from '../Button/Button';
import Icons from '../../assets/sprite.svg';
import { useAppSelector, useModal } from '../../hooks';
import Card from '../Card/Card';

import { ColumnForm } from './ColumnForm/ColumnForm';
import { useState } from 'react';

import { selectCardsByColumnId } from '../../redux/cards';

export const Column = ({ title, columnId }) => {
  const [isOpenModal, toggleModal] = useModal();

  const [actionType, setActionType] = useState(null);

  const onEditClick = () => {
    setActionType('edit');
    toggleModal();
  };

  const onDeleteClick = () => {
    setActionType('delete');
    toggleModal();
  };

  const cards = useAppSelector((state) =>
    selectCardsByColumnId(state, columnId)
  );

  return (
    <SColumnWrapper>
      <SColumnName>
        <div>{title}</div>

        <SIconsWrapper>
          <button onClick={onEditClick}>
            <SIcon width={16} height={16}>
              <use href={Icons + '#icon-pencil'}></use>
            </SIcon>
          </button>

          <button onClick={onDeleteClick}>
            <SIcon width={16} height={16}>
              <use href={Icons + '#icon-trash'}></use>
            </SIcon>
          </button>
        </SIconsWrapper>
      </SColumnName>

      <SCardWrapper>
        <SCardWrapperScroll>
          {cards.map((card) => (
            <Card key={card._id} {...card} />
          ))}
        </SCardWrapperScroll>
      </SCardWrapper>

      <SButtonWrapper>
        <Button title={'Add another card'} icon={true} size={'large'} />
      </SButtonWrapper>

      {isOpenModal && (
        <ColumnForm
          actionType={actionType}
          toggleModal={toggleModal}
          id={columnId}
          title={title}
        />
      )}
    </SColumnWrapper>
  );
};
