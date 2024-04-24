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
  SFilterWrapper_div,
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
      <SFilterWrapper_div onClick={() => setIsOpenModal()}>
        <Icon id="filter" size={16} />
        <SFilter_p>Filters</SFilter_p>
      </SFilterWrapper_div>
      {!boardName && <NothinFound />}
      {boardName && <MainDashboard />}
      {isOpenModal && (
        <Modal toggleModal={closeModal}>
          <Filters />
        </Modal>
      )}
    </SMainDashboard>
  );
};

export default ScreensPage;
