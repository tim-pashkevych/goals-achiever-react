import { useState } from 'react';

import { boardBackgoundImgs } from '../../constants/images/';
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
  const backgoroundImage =
    activeBoard.backgroundImage !== 'default'
      ? boardBackgoundImgs.find(
          (img) => img.key === activeBoard.backgroundImage
        )
      : null;

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <SMainDashboard
      $bgMobile1x={backgoroundImage?.mobile.x1}
      $bgMobile2x={backgoroundImage?.mobile.x2}
      $bgTablet1x={backgoroundImage?.tablet.x1}
      $bgTablet2x={backgoroundImage?.tablet.x1}
      $bgDesktop1x={backgoroundImage?.desktop.x1}
      $bgDesktop2x={backgoroundImage?.desktop.x1}
    >
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
