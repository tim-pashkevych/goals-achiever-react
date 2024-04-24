import IBoard from './IBoard';
import IShortBoard from './IShortBoard';

interface IBoardsState {
  boards: IShortBoard[];
  activeBoard: IBoard | null;
  isLoading: boolean;
}

export default IBoardsState;
