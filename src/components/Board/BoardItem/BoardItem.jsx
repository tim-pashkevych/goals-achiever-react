import { BoardForm, Modal } from '../..';
import { useModal } from '../../../hooks';
import {
  SDivButton,
  SDivLi,
  SIcon,
  SLi,
  SbuttonProject,
  SpProject,
} from './BoardItem.styled';

export const BoardItem = ({ id, title }) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <>
      <SLi>
        <SDivLi>
          <SIcon id="project" size={20} className="project" />
          <SpProject>{title}</SpProject>
        </SDivLi>

        <SDivButton>
          <SbuttonProject type="button" onClick={toggleModal} aria-label="edit">
            <SIcon id="pencil" size={16} className="pencil" />
          </SbuttonProject>
          <SbuttonProject type="button" aria-label="delete">
            <SIcon id="trash" size={16} className="trash" />
          </SbuttonProject>
        </SDivButton>
      </SLi>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <BoardForm boardId={id} />
        </Modal>
      )}
    </>
  );
};
