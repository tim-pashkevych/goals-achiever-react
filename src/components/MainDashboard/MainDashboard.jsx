import { useAppSelector } from '../../hooks';
// import { selectColumns } from '../../redux';
import { Column } from '../Column/Column';

import { SColumnWrapper, STitle_h3 } from './MainDashboard.styled';

export const MainDashboard = ({ title }) => {
  const columns = useAppSelector((state) => state.colums.items);
  console.log('columns', columns);
  return (
    <>
      <STitle_h3>Board name</STitle_h3>
      <SColumnWrapper>
        {columns.map((column) => (
          <Column
            title={column.title}
            key={column._id}
            id={column._id}
            {...column}
          />
        ))}
      </SColumnWrapper>
    </>
  );
};
