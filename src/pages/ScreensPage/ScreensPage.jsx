import { useState } from 'react';

import {
  Filters,
  Icon,
  MainDashboard,
  Modal,
  NothinFound,
} from '../../components';
import { useAppSelector, useModal } from '../../hooks';
import {
  SFilterWrapper_button,
  SFilter_p,
  SMainDashboard,
} from './ScreensPage.Styled';
import { selectActiveBoard } from '../../redux';

const ScreensPage = () => {
  const activeBoard = useAppSelector(selectActiveBoard);
  const [isOpenModal, setIsOpenModal] = useModal();
  const [filter, setFilter] = useState(null);

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <SMainDashboard>
      <SFilterWrapper_button onClick={() => setIsOpenModal()}>
        <Icon id="filter" size={16} />
        <SFilter_p>Filters</SFilter_p>
      </SFilterWrapper_button>
      {!activeBoard && <NothinFound />}
      {activeBoard && <MainDashboard filter={filter} />}
      {isOpenModal && (
        <Modal toggleModal={closeModal}>
          <Filters filter={filter} setFilter={setFilter} />
        </Modal>
      )}
    </SMainDashboard>
  );
};

export default ScreensPage;
