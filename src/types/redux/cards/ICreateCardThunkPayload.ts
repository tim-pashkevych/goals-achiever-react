import { Date, Id } from '..';

interface ICreateCardThunkPayload {
  result: {
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
  };
}

export default ICreateCardThunkPayload;
