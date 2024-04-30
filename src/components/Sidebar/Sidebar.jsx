import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BoardForm } from '../Board/BoardForm/BoardForm';
import { BoardList } from '../Board/BoardList/BoardList';
import { ConfirmationPopup } from '../ConfirmationPopup/ConfirmationPopup';
import { Modal } from '../Modal/Modal';
import { NeedHelpForm } from '../NeedHelpForm/NeedHelpForm';
import { useAppDispatch, useModal } from '../../hooks';
import { logoutThunk } from '../../redux';

import {
  SDiv,
  SIcon,
  SNavLink,
  Sp,
  Sh2,
  SDivCreate,
  SbuttonCreate,
  SpHelp,
  SpCreate,
  SbuttonNeed,
  SDivLogOut,
  SDivNeed,
  SDivProject,
  SbuttonLogout,
} from './Sidebar.styled';

export const Sidebar = ({ className, toggleSidebar }) => {
  const [isOpenModal, toggleModal] = useModal();
  const [isOpenModalIssues, toggleModalIssues] = useModal();
  const [isOpenLogoutModal, toggleLogoutModal] = useModal();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        navigate('/');
        toggleModal();
        toast.warning('In order to use the application you must log in.');
      })
      .catch(() => {
        toast.error('Sorry, something went wrong. Please try again later.');
      });
  };

  return (
    <>
      <SDiv className={className}>
        <SNavLink to="/">
          <SIcon id="logo" size={32} className="logo" />
          <Sp>Task Pro</Sp>
        </SNavLink>
        <Sh2>My boards</Sh2>
        <SDivCreate>
          <SpCreate>Create a new board</SpCreate>
          <SbuttonCreate type="button" onClick={toggleModal}>
            <SIcon id="plus" size={20} className="plus" />
          </SbuttonCreate>
        </SDivCreate>

        <SDivProject>
          <BoardList toggleSidebar={toggleSidebar} />
        </SDivProject>

        <SDivNeed>
          <SpHelp>
            If you need help with <span>TaskPro</span>, check out our support
            resources or reach out to our customer support team.
          </SpHelp>
          <SbuttonNeed onClick={toggleModalIssues}>
            <SIcon id="help-circle" size={20} className="help-circle" />
            Need help?
          </SbuttonNeed>
        </SDivNeed>

        <SDivLogOut>
          <SbuttonLogout type="button" onClick={toggleLogoutModal}>
            <SIcon id="login" size={32} className="login" />
            Log out
          </SbuttonLogout>
        </SDivLogOut>
      </SDiv>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <BoardForm handleCloseModal={toggleModal} />
        </Modal>
      )}
      {isOpenModalIssues && (
        <Modal toggleModal={toggleModalIssues}>
          <NeedHelpForm toggleModal={toggleModalIssues} />
        </Modal>
      )}
      {isOpenLogoutModal && (
        <Modal toggleModal={toggleLogoutModal}>
          <ConfirmationPopup
            closeModal={toggleLogoutModal}
            approveModal={handleLogout}
            logout={true}
            action="log out"
          />
        </Modal>
      )}
    </>
  );
};
