import { Id } from '..';

interface IShortColumn {
  _id: string;
  boardId: Id;
  title: string;
  createdAt: string;
}

export default IShortColumn;
