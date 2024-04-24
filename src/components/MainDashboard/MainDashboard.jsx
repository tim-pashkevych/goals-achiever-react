// example:  <Icon id="plus" size={100} color="black" />;

import { useModal } from '../../hooks/useModal';
import { Icon } from '../Icon/Icon';
import { Modal } from '../Modal/Modal';
import { Filters } from './Filters/Filters';
import {
  SFilterWrapper_div,
  SFilter_p,
  SMainDashboard,
} from './MainDashboard.styled';
import { NothinFound } from './NothinFound/NothinFound';

export const MainDashboard = () => {
  const [isOpenModal, setIsOpenModal] = useModal();

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <SMainDashboard>
      <SFilterWrapper_div onClick={() => setIsOpenModal()}>
        <Icon id="filter" size={16} />
        <SFilter_p>Filters</SFilter_p>
      </SFilterWrapper_div>
      <NothinFound />
      {isOpenModal && (
        <Modal toggleModal={closeModal}>
          <Filters />
        </Modal>
      )}
    </SMainDashboard>
  );
};
