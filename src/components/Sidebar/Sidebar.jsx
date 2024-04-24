import { Icon } from '../Icon/Icon';
import { SDiv, SIcon } from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <SDiv>
      <SIcon id="logo" size={32} className="logo" />
      <p>Task Pro</p>
      <p>My boards</p>
      <p>Create a new board</p>
      <button type="button">
        <SIcon id="plus" size={20} className="plus" />
      </button>
      <p>Project office</p>
      <p>Neon Light Project</p>
      <p>
        If you need help with <span>TaskPro</span> , check out our support
        resources or reach out to our customer support team.
      </p>
      <Icon
        id="help-circle"
        size={20}
        colorFill="#ffffff"
        colorStroke="black"
      />
      <p>Need help?</p>
      <Icon id="login" size={32} color="BEDBB0" />
      <p>Log out</p>
    </SDiv>
  );
};
