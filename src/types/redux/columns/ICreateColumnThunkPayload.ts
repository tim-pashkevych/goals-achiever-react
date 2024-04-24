import { Date, Id } from '..';

interface ICreateColumnThunkPayload {
  result: {
    _id: Id;
    owner: Id;
    boardId: Id;
    title: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export default ICreateColumnThunkPayload;
