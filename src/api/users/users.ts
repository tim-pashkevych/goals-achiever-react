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

const info = async (data: FormData) => {
  const result = await api.patch('/users', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data.result;
};

const current = async () => {
  const result = await api.get('/users');

  const { token } = result.data.result.user;

  setAxiosToken(token);
  return result.data;
};

const theme = async (data: object) => {
  const result = await api.patch('/users/theme', data);
  const { theme } = result.data.result;
  return theme;
};

export default {
  register,
  login,
  logout,
  info,
  current,
  theme,
};
