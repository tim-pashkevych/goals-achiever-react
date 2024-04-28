import { useParams } from 'react-router-dom';
import {
  Filters,
  Icon,
  MainDashboard,
  Modal,
  NothinFound,
} from '../../components';
import { useModal } from '../../hooks';
import {
  SFilterWrapper_button,
  SFilter_p,
  SMainDashboard,
} from './ScreensPage.Styled';
import { useState } from 'react';

const ScreensPage = () => {
  const [isOpenModal, setIsOpenModal] = useModal();
  const { boardName } = useParams('boardName');
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
      {!boardName && <NothinFound />}
      {boardName && <MainDashboard filter={filter} />}
      {isOpenModal && (
        <Modal toggleModal={closeModal}>
          <Filters filter={filter} setFilter={setFilter} />
        </Modal>
      )}
    </SMainDashboard>
  );
};

export default ScreensPage;
