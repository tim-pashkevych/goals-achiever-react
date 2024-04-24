import { IUserCredentials } from '../../types';
import { api, setAxiosToken } from '../axios';

const register = async (credentials: IUserCredentials) => {
  const result = await api.post('/users/register', credentials);
  return result.data;
};

const login = async (credentials: IUserCredentials) => {
  const result = await api.post('/users/login', credentials);
  const { token } = result.data;
  setAxiosToken(token);
  return result.data;
};

const logout = async () => {
  await api.post('/users/logout');
  setAxiosToken('');
};

const avatar = async (image: FormData) => {
  const result = await api.patch('/users/avatar', image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data.result;
};

export default {
  register,
  login,
  logout,
  avatar,
};
