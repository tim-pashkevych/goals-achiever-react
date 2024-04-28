import { Id, Date } from '../..';

interface IUpdateCardRequestBody {
  title?: string;
  description?: string;
  priority?: string;
  deadline?: Date;
  boardId?: Id;
  columnId?: Id;
}

export default IUpdateCardRequestBody;
