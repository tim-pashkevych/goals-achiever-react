import { Icon } from '..';
import { useAppDispatch, useAppSelector, useModal } from '../../hooks';
import {
  getBoardByIdThunk,
  selectActiveBoard,
  selectColumns,
} from '../../redux';
import { Column } from '../Column/Column';

import {
  SButton_button,
  SColumnWrapper,
  SIconWrapper_div,
  STitle_h3,
} from './MainDashboard.styled';
import { ColumnForm } from '../Column/ColumnForm/ColumnForm';
import { useEffect } from 'react';

export const MainDashboard = ({ filter }) => {
  const board = useAppSelector(selectActiveBoard);
  const columns = useAppSelector(selectColumns);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBoardByIdThunk(board._id));
  }, [board, dispatch]);

  const [isOpenModal, toggleModal] = useModal();

  return (
    <>
      <STitle_h3>{board?.title}</STitle_h3>

      <SColumnWrapper>
        {columns.length > 0 &&
          columns.map((column) => (
            <Column
              title={column.title}
              key={column._id}
              columnId={column._id}
              boardId={board?._id}
              {...column}
              filter={filter}
            />
          ))}
        <SButton_button onClick={toggleModal}>
          <SIconWrapper_div>
            <Icon id={'plus'} size={14} />
          </SIconWrapper_div>
          Add another column
        </SButton_button>
      </SColumnWrapper>
      {isOpenModal && (
        <ColumnForm
          actionType={'add'}
          toggleModal={toggleModal}
          id={board?._id}
          title={'Column title'}
        />
      )}
    </>
  );
};
