import IUser from './IUser';

interface ILoginThunkPayload {
  token: string;
  user: IUser;
}

export default ILoginThunkPayload;
