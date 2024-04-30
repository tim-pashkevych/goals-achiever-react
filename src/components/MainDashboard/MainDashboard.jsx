import { useEffect } from 'react';

import { Icon, Loader } from '..';
import { Column } from '../Column/Column';
import { ColumnForm } from '../Column/ColumnForm/ColumnForm';
import { useAppDispatch, useAppSelector, useModal } from '../../hooks';
import {
  getBoardByIdThunk,
  selectActiveBoard,
  selectColumns,
  selectIsBoardLoading,
} from '../../redux';

import {
  SButton_button,
  SColumnWrapper,
  SIconWrapper_div,
  STitle_h3,
} from './MainDashboard.styled';

export const MainDashboard = ({ filter }) => {
  const board = useAppSelector(selectActiveBoard);
  const columns = useAppSelector(selectColumns);
  const isLoading = useAppSelector(selectIsBoardLoading);
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
      {isLoading && <Loader />}
    </>
  );
};
