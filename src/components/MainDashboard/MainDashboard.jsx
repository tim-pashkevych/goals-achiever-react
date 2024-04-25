import { Icon } from '../Icon/Icon';
import {
  SButton_button,
  SIconWrapper_div,
  STitle_h3,
} from './MainDashboard.styled';

export const MainDashboard = () => {
  return (
    <>
      <STitle_h3>Project office</STitle_h3>

      <SButton_button>
        <SIconWrapper_div>
          <Icon id={'plus'} size={14} />
        </SIconWrapper_div>
        Add another column
      </SButton_button>
    </>
  );
};
