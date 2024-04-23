import IUser from './IUser';

interface IUserState {
  token: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  user: IUser;
}

export default IUserState;
