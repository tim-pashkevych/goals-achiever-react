import { useModal } from '../../../hooks/useModal';
import { Icon } from '../../Icon/Icon';
import { Modal } from '../../Modal/Modal';
import { EditProfile } from './EditProfile/EditProfile';
import {
  SImageWrapper_div,
  STitle_p,
  SWrapper_div,
} from './UserProfile.styled';

export const UserProfile = () => {
  const [isOpenModal, setIsOpenModal] = useModal();

  const handleOpenModal = () => {
    setIsOpenModal();
  };
  return (
    <SWrapper_div onClick={handleOpenModal}>
      <STitle_p>username</STitle_p>

      <SImageWrapper_div>
        <Icon id={'user'} size={32} />
      </SImageWrapper_div>
      {isOpenModal && (
        <Modal>
          <EditProfile />
        </Modal>
      )}
    </SWrapper_div>
  );
};
