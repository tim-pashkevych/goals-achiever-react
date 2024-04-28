import { Date, IShortBoard, IShortCard, IShortColumn, Id } from '..';

interface IFetchUserThunkPayload {
  result: {
    user: {
      _id: Id;
      name: string;
      email: string;
      password: string;
      avatarURL: string | null;
      theme: string;
      token: string;
      createdAt: Date;
      updatedAt: Date;
      refreshToken: string;
    };
    boards: IShortBoard[];
    columns: IShortColumn[];
    cards: IShortCard[];
  };
}

export default IFetchUserThunkPayload;
