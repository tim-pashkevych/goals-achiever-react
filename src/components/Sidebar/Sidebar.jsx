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
  SpProject,
  // SpNeon,
  SbuttonNeed,
  SDivLogOut,
  SDivNeed,
  SLi,
  SDivProject,
  SbuttonProject,
  SDivButton,
  SbuttonLogout,
  SDivLi,
  SUl,
} from './Sidebar.styled';

export const Sidebar = () => {
  const [isOpenModalAddBoard, toggleIsOpenModalAddBoard] = useModal();
  const [isOpenModalEditBoard, toggleIsOpenModalEditBoard] = useModal();
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
          <SbuttonCreate type="button" onClick={toggleIsOpenModalAddBoard}>
            <SIcon id="plus" size={20} className="plus" />
          </SbuttonCreate>
        </SDivCreate>

        <SDivProject>
          <SUl>
            <SLi>
              <SDivLi>
                <SIcon id="project" size={20} className="project" />
                <SpProject>Project office</SpProject>
              </SDivLi>

              <SDivButton>
                <SbuttonProject
                  type="button"
                  onClick={toggleIsOpenModalEditBoard}
                  aria-label="edit"
                >
                  <SIcon id="pencil" size={16} className="pencil" />
                </SbuttonProject>
                <SbuttonProject type="button" aria-label="delete">
                  <SIcon id="trash" size={16} className="trash" />
                </SbuttonProject>
              </SDivButton>
            </SLi>
            <SLi>
              <SDivLi>
                <SIcon id="puzzle-piece" size={20} className="puzzle-piece" />
                <SpProject>Neon Light Project</SpProject>
              </SDivLi>
              <SDivButton>
                <SbuttonProject type="button" aria-label="edit">
                  <SIcon id="pencil" size={16} className="pencil" />
                </SbuttonProject>
                <SbuttonProject type="button" aria-label="delete">
                  <SIcon id="trash" size={16} className="trash" />
                </SbuttonProject>
              </SDivButton>
            </SLi>
          </SUl>
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
      {isOpenModalAddBoard && <Modal></Modal>}
      {isOpenModalEditBoard && <Modal></Modal>}
    </>
  );
};
