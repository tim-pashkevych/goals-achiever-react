import icons from 'assets/sprite.svg';
import { Modal, CardPopup } from '../../components';
import { useModal, useAppDispatch } from '../../hooks';
import { IUpdateCardRequestBody, Id, Priority } from '../../types';
import { deleteCardByIdThunk, updateCardByIdThunk } from '../../redux';
import { PriorityColor } from '../../constants';
import { ActionType, IFormData } from '../CardPopup/types';

import { CardStatusPopup } from './CardStatusPopup';

import * as S from './Card.styled';

interface ICardProps {
  title?: string;
  description?: string;
  priority?: Priority;
  deadline?: string | number | Date;
  _id: Id;
  columnId: Id;
  boardId: Id;
}

const Card = ({
  title = 'The watch spot design',
  description = "Create a visually stunning and eye-catching watch dial design that embodies our brand's...",
  deadline = new Date(),
  priority = Priority.Low,
  _id,
  columnId,
  boardId,
}: ICardProps) => {
  const [isOpenedModal, toggleModal] = useModal();

  const dispatch = useAppDispatch();

  const handleOnEdit = (updatedCard: IFormData) => {
    console.log('updatedCard', updatedCard);
    toggleModal(false);

    const data: IUpdateCardRequestBody = {
      ...updatedCard,
      columnId,
      boardId,
    };

    dispatch(updateCardByIdThunk({ id: _id, newCardBody: data }));
  };

  const handleOnDelete = () => {
    dispatch(deleteCardByIdThunk(_id));
  };

  return (
    <>
      <S.card_div $stickerColor={PriorityColor[priority]}>
        <S.title_h4>{title}</S.title_h4>
        <S.description_p>{description}</S.description_p>
        <S.bottomPartContainer_div>
          <S.tagsList_ul>
            <S.tagItem_li>
              <S.tagLabel_h5>Priority</S.tagLabel_h5>
              <S.priorityValue_p $priorityColor={PriorityColor[priority]}>
                {priority}
              </S.priorityValue_p>
            </S.tagItem_li>
            <S.tagItem_li>
              <S.tagLabel_h5>Deadline</S.tagLabel_h5>
              <S.deadlineValue_p>{deadline}</S.deadlineValue_p>
            </S.tagItem_li>
          </S.tagsList_ul>
          <S.bottomRightPartContainer_div>
            <S.actionButtonsList_ul>
              <S.actionItem_li>
                <CardStatusPopup />
              </S.actionItem_li>
              <S.actionItem_li>
                <S.actionButton_button
                  onClick={(event) => {
                    event.currentTarget.blur();
                    toggleModal(true);
                  }}
                >
                  <svg width={16} height={16}>
                    <use href={`${icons}#icon-pencil-2`}></use>
                  </svg>
                </S.actionButton_button>
              </S.actionItem_li>
              <S.actionItem_li>
                <S.actionButton_button
                  onClick={(event) => {
                    event.currentTarget.blur();
                    handleOnDelete();
                  }}
                >
                  <svg width={16} height={16}>
                    <use href={`${icons}#icon-trash-2`}></use>
                  </svg>
                </S.actionButton_button>
              </S.actionItem_li>
            </S.actionButtonsList_ul>
          </S.bottomRightPartContainer_div>
        </S.bottomPartContainer_div>
      </S.card_div>
      {isOpenedModal && (
        <Modal toggleModal={toggleModal} padding="0">
          <CardPopup actionType={ActionType.Edit} onSave={handleOnEdit} />
        </Modal>
      )}
    </>
  );
};

export default Card;
