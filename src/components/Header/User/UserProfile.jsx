import { useRef } from 'react';

import { useModal } from '../../../hooks/modal/useModal';
import { Icon } from '../../Icon/Icon';
import { Modal } from '../../Modal/Modal';
import { EditProfile } from './EditProfile/EditProfile';
import {
  SImageWrapper_div,
  STitle_p,
  SWrapper_button,
} from './UserProfile.styled';
import { selectUser } from '../../../redux';
import { useAppSelector } from '../../../hooks';

export const UserProfile = () => {
  const { name, avatarURL } = useAppSelector(selectUser);
  const [isOpenModal, setIsOpenModal] = useModal();
  const wrapper = useRef();

  const handleOpenModal = (e) => {
    const curentWrapper = e.target.closest('button');
    if (curentWrapper === wrapper.current) {
      setIsOpenModal();
    }
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <SWrapper_button onClick={handleOpenModal} ref={wrapper}>
      <STitle_p>{name}</STitle_p>

      <SImageWrapper_div>
        {avatarURL && <img src={avatarURL} alt="avatar" />}
        {!avatarURL && <Icon id={'user'} size={32} />}
      </SImageWrapper_div>
      {isOpenModal && (
        <Modal toggleModal={handleCloseModal}>
          <EditProfile handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </SWrapper_button>
  );
};
