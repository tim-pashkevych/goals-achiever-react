import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from '../Button/Button';
import Icons from '../../assets/sprite.svg';
import { useAppDispatch, useAppSelector, useModal } from '../../hooks';
import Card from '../Card/Card';

import { ColumnForm } from './ColumnForm/ColumnForm';
import { createCardThunk, selectCardsByColumnId } from '../../redux/cards';
import { filterCards } from '../../helpers/filterCards';
import { CardPopup, Modal } from '..';
import {
  SButtonWrapper,
  SCardWrapperScroll,
  SColumnName,
  SColumnWrapper,
  SIcon,
  SIconsWrapper,
} from './Column.styled';

export const Column = ({ title, columnId, filter, boardId }) => {
  const dispatch = useAppDispatch();
  const [isOpenModal, toggleModal] = useModal();
  const [isAddCardOpenModal, toggleAddCardModal] = useModal();

  const [actionType, setActionType] = useState(null);

  const onEditClick = () => {
    setActionType('edit');
    toggleModal();
  };

  const onDeleteClick = () => {
    setActionType('delete');
    toggleModal();
  };

  const handleAddAnotherCard = (data) => {
    dispatch(createCardThunk({ ...data, boardId, columnId }))
      .unwrap()
      .then(() => {
        toggleAddCardModal();
      })
      .catch((error) => toast.error(error.message));
  };

  const cards = useAppSelector((state) =>
    selectCardsByColumnId(state, columnId)
  );
  const filteredCards = filterCards(cards, filter);

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

      <SCardWrapperScroll>
        {filteredCards.map((card) => (
          <Card
            key={card._id}
            {...card}
            boardId={boardId}
            columnId={columnId}
          />
        ))}
      </SCardWrapperScroll>

      <SButtonWrapper>
        <Button
          title={'Add another card'}
          icon={true}
          size={'large'}
          onClick={toggleAddCardModal}
        />
      </SButtonWrapper>

      {isOpenModal && (
        <ColumnForm
          actionType={actionType}
          toggleModal={toggleModal}
          id={columnId}
          title={title}
        />
      )}

      {isAddCardOpenModal && (
        <Modal toggleModal={toggleAddCardModal}>
          <CardPopup
            actionType="Add"
            onSave={handleAddAnotherCard}
            handleCloseModal={toggleAddCardModal}
          />
        </Modal>
      )}
    </SColumnWrapper>
  );
};
