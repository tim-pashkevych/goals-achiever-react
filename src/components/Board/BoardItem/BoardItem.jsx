import {
  SDivButton,
  SDivLi,
  SIcon,
  SLi,
  SbuttonProject,
  SpProject,
} from './BoardItem.styled';

export const BoardItem = ({ title }) => {
  const toggleIsOpenModalEditBoard = () => {};

  return (
    <SLi>
      <SDivLi>
        <SIcon id="project" size={20} className="project" />
        <SpProject>{title}</SpProject>
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
  );
};
