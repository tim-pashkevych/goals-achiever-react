import Date from '../Date';
import Id from '../Id';

interface ICard {
  _id: Id;
  owner: Id;
  boardId: Id;
  columnId: Id;

  title: string;
  description: string;
  priority: string;
  deadline: Date;

  createdAt: Date;
  updatedAt: Date;
}

export default ICard;
