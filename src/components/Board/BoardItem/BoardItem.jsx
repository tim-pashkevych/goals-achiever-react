import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BoardForm, Modal } from '../..';
import { useAppDispatch, useAppSelector, useModal } from '../../../hooks';
import { deleteBoardByIdThunk, selectActiveBoard } from '../../../redux';
import {
  SDivButton,
  SDivLi,
  SIcon,
  SLi,
  SbuttonProject,
  SpProject,
} from './BoardItem.styled';
import { updateActiveBoard } from '../../../redux/boards/slice';
import { ConfirmationPopup } from '../../ConfirmationPopup/ConfirmationPopup';
import { useState } from 'react';

export const BoardItem = ({ id, title, icon, toggleSidebar = false }) => {
  const [isOpenModal, toggleModal] = useModal();
  const [isOpenDeleteModal, toggleDeleteModal] = useModal();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { boardName } = useParams();
  const activeBoard = useAppSelector(selectActiveBoard);
  const isActive = activeBoard._id === id;

  const handleBoardClick = (name) => {
    if (name === boardName) return;
    navigate(`/home/${name}`);
    dispatch(updateActiveBoard(id));
    if (toggleSidebar) toggleSidebar();
    localStorage.setItem('activeBoardId', JSON.stringify(id));
  };

  const handleDelete = () => {
    setIsLoading(true);
    dispatch(deleteBoardByIdThunk(id))
      .unwrap()
      .then(() => {
        localStorage.removeItem('activeBoardId');
        toast.success(`The board "${boardName}" was deleted.`);
        navigate(`/home`);
        if (toggleSidebar) toggleSidebar();
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <SLi onClick={() => handleBoardClick(title)} $isActive={isActive}>
        <SDivLi>
          <SIcon id={icon} size={18} className="project" />
          <SpProject>{title}</SpProject>
        </SDivLi>

        {isActive && (
          <SDivButton>
            <SbuttonProject
              type="button"
              onClick={toggleModal}
              aria-label="edit"
            >
              <SIcon id="pencil-2" size={16} className="pencil" />
            </SbuttonProject>
            <SbuttonProject
              type="button"
              onClick={toggleDeleteModal}
              aria-label="delete"
            >
              <SIcon id="trash-2" size={16} className="trash" />
            </SbuttonProject>
          </SDivButton>
        )}
      </SLi>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <BoardForm boardId={id} handleCloseModal={toggleModal} />
        </Modal>
      )}
      {isOpenDeleteModal && (
        <Modal toggleModal={toggleDeleteModal}>
          <ConfirmationPopup
            closeModal={toggleDeleteModal}
            approveModal={handleDelete}
            isLoading={isLoading}
            action={`remove ${title} board`}
          />
        </Modal>
      )}
    </>
  );
};
