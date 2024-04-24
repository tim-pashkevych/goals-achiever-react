import { Id } from '..';

interface IMoveCardThunkPayload {
  result: {
    _id: Id;
    columnId: Id;
  };
}

export default IMoveCardThunkPayload;
