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
import { ConfirmationPopup } from '../ConfirmationPopup/ConfirmationPopup';
import { deleteColumnByIdThunk, selectIsColumnLoading } from '../../redux';

export const Column = ({ title, columnId, filter, boardId }) => {
  const dispatch = useAppDispatch();
  const [isOpenModal, toggleModal] = useModal();
  const [isAddCardOpenModal, toggleAddCardModal] = useModal();
  const [isOpenDeleteModal, toggleDeleteModal] = useModal();
  const isLoading = useAppSelector(selectIsColumnLoading);
  const [actionType, setActionType] = useState(null);

  const onEditClick = () => {
    setActionType('edit');
    toggleModal();
  };

  const handleDeleteColumn = () => {
    dispatch(deleteColumnByIdThunk(columnId));
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

          <button onClick={toggleDeleteModal}>
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

      <SButtonWrapper $emptyList={filteredCards.length === 0}>
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
      {isOpenDeleteModal && (
        <Modal toggleModal={toggleDeleteModal}>
          <ConfirmationPopup
            closeModal={toggleDeleteModal}
            approveModal={handleDeleteColumn}
            action={`delete column ${title}`}
            isLoading={isLoading}
          />
        </Modal>
      )}
    </SColumnWrapper>
  );
};
