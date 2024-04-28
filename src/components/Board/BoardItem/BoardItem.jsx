import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BoardForm, Modal } from '../..';
import { useAppDispatch, useAppSelector, useModal } from '../../../hooks';
import {
  deleteBoardByIdThunk,
  getBoardByIdThunk,
  selectActiveBoard,
} from '../../../redux';
import {
  SDivButton,
  SDivLi,
  SIcon,
  SLi,
  SbuttonProject,
  SpProject,
} from './BoardItem.styled';

export const BoardItem = ({ id, title, icon, setActiveBoardId }) => {
  const [isOpenModal, toggleModal] = useModal();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { boardName } = useParams();
  const activeBoard = useAppSelector(selectActiveBoard);
  const isActive = activeBoard._id === id;

  const handleBoardClick = (name) => {
    dispatch(getBoardByIdThunk(id))
      .unwrap()
      .then(() => {
        setActiveBoardId(id);
        navigate(`/home/${name}`);
      })
      .catch((error) => toast.error(error.message));
  };

  const handleDelete = (id) => {
    dispatch(deleteBoardByIdThunk(id))
      .unwrap()
      .then(() => {
        toast.success(`The board "${boardName}" was deleted.`);
      })
      .catch((error) => {
        toast.error(error.message);
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
              <SIcon id="pencil" size={16} className="pencil" />
            </SbuttonProject>
            <SbuttonProject
              type="button"
              onClick={() => handleDelete(id)}
              aria-label="delete"
            >
              <SIcon id="trash" size={16} className="trash" />
            </SbuttonProject>
          </SDivButton>
        )}
      </SLi>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <BoardForm boardId={id} handleCloseModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
