import { BoardForm, BoardList } from '..';
import { useAppDispatch, useModal } from '../../hooks';
import { logoutThunk } from '../../redux';
import { Modal } from '../Modal/Modal';
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
  // SpNeon,
  SbuttonNeed,
  SDivLogOut,
  SDivNeed,
  SDivProject,
  SbuttonLogout,
} from './Sidebar.styled';

export const Sidebar = () => {
  const [isOpenModal, toggleModal] = useModal();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <>
      <SDiv>
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
          <BoardList />
        </SDivProject>

        <SDivNeed>
          <SpHelp>
            If you need help with <span>TaskPro</span>, check out our support
            resources or reach out to our customer support team.
          </SpHelp>
          <SbuttonNeed>
            <SIcon id="help-circle" size={20} className="help-circle" />
            Need help?
          </SbuttonNeed>
        </SDivNeed>

        <SDivLogOut>
          <SbuttonLogout type="button" onClick={handleLogout}>
            <SIcon id="login" size={32} className="login" />
            Log out
          </SbuttonLogout>
        </SDivLogOut>
      </SDiv>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <BoardForm />
        </Modal>
      )}
    </>
  );
};
