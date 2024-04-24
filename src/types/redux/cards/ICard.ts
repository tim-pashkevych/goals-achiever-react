import Date from '../Date';
import Id from '../Id';

interface ICard {
  title: string;
  description: string;
  priority: string;
  deadline: string;
  _id: Id;
  boardId: Id;
  columnId: Id;
  owner: Id;
  createdAt: Date;
  updatedAt: Date;
}

export default ICard;
