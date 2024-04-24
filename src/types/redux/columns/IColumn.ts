import Date from '../Date';
import { ICard, Id } from '..';

interface IColumn {
  _id: Id;
  owner: Id;
  boardId: Id;

  title: string;
  cards: ICard[];

  createdAt: Date;
  updatedAt: Date;
}

export default IColumn;
