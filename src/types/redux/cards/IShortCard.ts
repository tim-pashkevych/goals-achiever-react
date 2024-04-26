import { Date, Id, Priority } from '../';

interface IShortCard {
  _id: Id;
  boardId: Id;
  columnId: Id;

  title: string;
  description: string;
  priority: Priority;
  deadline: Date;
}

export default IShortCard;
