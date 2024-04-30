import { useModal } from '../../hooks';
import { BoardForm } from '../Board/BoardForm/BoardForm';
import { Modal } from '../Modal/Modal';
import {
  SAccentedButton,
  SNothingFoundP,
  SWrapper_div,
} from './NothitnFound.styled';

export const NothinFound = () => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <SWrapper_div>
      <SNothingFoundP>
        Before starting your project, it is essential&nbsp;
        <SAccentedButton onClick={toggleModal} type="button">
          to create a board
        </SAccentedButton>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </SNothingFoundP>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <BoardForm handleCloseModal={toggleModal} />
        </Modal>
      )}
    </SWrapper_div>
  );
};
