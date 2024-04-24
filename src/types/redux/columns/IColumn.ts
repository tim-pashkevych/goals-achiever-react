import Date from '../Date';
import Id from '../Id';
import { ICard } from '../cards';

interface IColumn {
  title: string;
  cards: ICard[];
  boardId: Id;
  owner: Id;
  _id: Id;
  createdAt: Date;
  updatedAt: Date;
}

export default IColumn;
