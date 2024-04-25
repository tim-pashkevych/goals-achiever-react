import { useRef } from 'react';
import { useModal } from '../../../hooks/modal/useModal';
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
  const wrapper = useRef();

  const handleOpenModal = (e) => {
    const curentWrapper = e.target.closest('div');
    if (curentWrapper === wrapper.current) {
      setIsOpenModal();
    }
  };
  return (
    <SWrapper_div onClick={handleOpenModal} ref={wrapper}>
      <STitle_p>username</STitle_p>

      <SImageWrapper_div>
        {true && (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTousHbMHE9y6ZaMX9GcxFGJRfxq8aWGYcIV_dPgWOwqQ&s"
            alt="sadasd"
          />
        )}
        {false && <Icon id={'user'} size={32} />}
      </SImageWrapper_div>
      {isOpenModal && (
        <Modal toggleModal={() => setIsOpenModal(false)}>
          <EditProfile />
        </Modal>
      )}
    </SWrapper_div>
  );
};
