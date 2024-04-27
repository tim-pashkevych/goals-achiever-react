import { BoardItem } from '../..';
import { useAppSelector } from '../../../hooks';
import { selectBoards } from '../../../redux';
import { SUl } from './BoardList.styled';

export const BoardList = () => {
  const boards = useAppSelector(selectBoards);
  return (
    <SUl>
      {boards.map((board) => (
        <BoardItem
          key={board._id}
          icon={board.icon}
          title={board.title}
          id={board._id}
        />
      ))}
    </SUl>
  );
};
