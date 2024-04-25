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

const ScreensPage = () => {
  const [isOpenModal, setIsOpenModal] = useModal();
  const { boardName } = useParams('boardName');

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <SMainDashboard>
      <SFilterWrapper_button onClick={() => setIsOpenModal()}>
        <Icon id="filter" size={16} />
        <SFilter_p>Filters</SFilter_p>
      </SFilterWrapper_button>
      {false && <NothinFound />}
      {true && <MainDashboard />}
      {isOpenModal && (
        <Modal toggleModal={closeModal}>
          <Filters />
        </Modal>
      )}
    </SMainDashboard>
  );
};

export default ScreensPage;
