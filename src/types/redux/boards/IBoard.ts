import { IColumn } from '../columns';

interface IBoard {
  owner: string;
  columns: IColumn[];
  title: string;
  icon: string;
  backgroundImage: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export default IBoard;
