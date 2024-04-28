import { Date, Id } from '../';

interface IShortCard {
  _id?: Id;
  boardId?: Id;
  columnId?: Id;

  title?: string;
  description?: string;
  priority?: string;
  deadline?: Date;
  createdAt?: Date;
}

export default IShortCard;
