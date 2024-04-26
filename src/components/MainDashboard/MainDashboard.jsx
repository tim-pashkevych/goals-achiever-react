import { useState } from 'react';
import { Icon } from '..';
import { useAppSelector, useModal } from '../../hooks';
import { selectActiveBoard, selectColumns } from '../../redux';
import { Column } from '../Column/Column';
// import { SButton_button } from '../Header/Header.styled';

import {
  SButton_button,
  SColumnWrapper,
  SIconWrapper_div,
  STitle_h3,
} from './MainDashboard.styled';
import { ColumnForm } from '../Column/ColumnForm/ColumnForm';

export const MainDashboard = () => {
  const board = useAppSelector(selectActiveBoard);
  console.log('BOARD', board);
  const columns = useAppSelector(selectColumns);

  console.log('columns', columns);

  const [isOpenModal, toggleModal] = useModal();

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
          // here we need to pass the boardId from board from selector , but smth wrong with it, so for this time i will pass the first column boardId
          id={columns[0].boardId}
          title={'Column title'}
        />
      )}
    </>
  );
};
