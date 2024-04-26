import { Icon } from '..';
import { useAppSelector } from '../../hooks';
import { selectActiveBoard, selectColumns } from '../../redux';
import { Column } from '../Column/Column';
// import { SButton_button } from '../Header/Header.styled';

import {
  SButton_button,
  SColumnWrapper,
  SIconWrapper_div,
  STitle_h3,
} from './MainDashboard.styled';

export const MainDashboard = () => {
  const board = useAppSelector(selectActiveBoard);
  const columns = useAppSelector(selectColumns);

  return (
    <>
      <STitle_h3>{board?.title}</STitle_h3>

      <SColumnWrapper>
        {columns &&
          columns.map((column) => (
            <Column
              title={column.title}
              key={column._id}
              id={column._id}
              {...column}
            />
          ))}
        <SButton_button>
          <SIconWrapper_div>
            <Icon id={'plus'} size={14} />
          </SIconWrapper_div>
          Add another column
        </SButton_button>
      </SColumnWrapper>
    </>
  );
};
