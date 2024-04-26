import IUser from './IUser';

interface ILoginThunkPayload {
  refreshToken: string;
  token: string;
  user: IUser;
}

export default ILoginThunkPayload;
