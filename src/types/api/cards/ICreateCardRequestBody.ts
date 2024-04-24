import { Date, Id } from '../..';

interface ICreateCardRequestBody {
  title: string;
  description: string;
  priority: string;
  deadline: Date;
  boardId: Id;
  columnId: Id;
}

export default ICreateCardRequestBody;
