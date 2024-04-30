import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BoardForm, Modal } from '../..';
import { ConfirmationPopup } from '../../ConfirmationPopup/ConfirmationPopup';
import { useAppDispatch, useAppSelector, useModal } from '../../../hooks';
import { deleteBoardByIdThunk, selectActiveBoard } from '../../../redux';
import { updateActiveBoard } from '../../../redux/boards/slice';

import {
  SDivButton,
  SDivLi,
  SIcon,
  SLi,
  SbuttonProject,
  SpProject,
} from './BoardItem.styled';

export const BoardItem = ({ id, title, icon, toggleSidebar = false }) => {
  const [isOpenModal, toggleModal] = useModal();
  const [isOpenDeleteModal, toggleDeleteModal] = useModal();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const activeBoard = useAppSelector(selectActiveBoard);
  const isActive = activeBoard._id === id;

  const handleBoardClick = () => {
    if (id === activeBoard._id) return;
    navigate(`/home/${title}`);
    dispatch(updateActiveBoard(id));
    if (toggleSidebar) toggleSidebar();
    localStorage.setItem('activeBoardId', JSON.stringify(id));
  };

  const handleDelete = () => {
    dispatch(deleteBoardByIdThunk(id))
      .unwrap()
      .then(() => {
        localStorage.removeItem('activeBoardId');
        toast.success(`The board "${id}" was deleted.`);
        navigate(`/home`);
        if (toggleSidebar) toggleSidebar();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <SLi onClick={() => handleBoardClick()} $isActive={isActive}>
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
            action={`remove ${title} board`}
          />
        </Modal>
      )}
    </>
  );
};
