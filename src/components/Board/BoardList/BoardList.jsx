import { BoardItem } from '../..';
import { useAppSelector, useLocalStorage } from '../../../hooks';
import { selectActiveBoard, selectBoards } from '../../../redux';
import { SUl } from './BoardList.styled';

export const BoardList = () => {
  const boards = useAppSelector(selectBoards);
  const activeBoard = useAppSelector(selectActiveBoard);
  const [, setActiveBoardId] = useLocalStorage(
    'activeBoardId',
    activeBoard?._id
  );

  return (
    <SUl>
      {boards.map((board) => (
        <BoardItem
          key={board._id}
          icon={board.icon}
          title={board.title}
          id={board._id}
          setActiveBoardId={setActiveBoardId}
        />
      ))}
    </SUl>
  );
};
