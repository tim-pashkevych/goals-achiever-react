import IUser from './IUser';

interface IUserState {
  token: string;
  refreshToken: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  user: IUser;
}

export default IUserState;
