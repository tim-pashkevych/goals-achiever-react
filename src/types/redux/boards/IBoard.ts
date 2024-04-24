import { Id } from '..';
import Date from '../Date';
import { IColumn } from '../columns';

interface IBoard {
  _id: Id;
  owner: Id;
  columns: IColumn[];

  title: string;
  icon: string;
  backgroundImage: string;

  createdAt: Date;
  updatedAt: Date;
}

export default IBoard;
