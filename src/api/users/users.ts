import { IUserCredentials } from '../../types';
import { api, setAxiosToken } from '../axios';

const register = async (credentials: IUserCredentials) => {
  try {
    const result = await api.post('/users/register', credentials);
    return result.data;
  } catch (error) {
    throw error;
  }
};

const login = async (credentials: IUserCredentials) => {
  try {
    const result = await api.post('/users/login', credentials);
    const { token } = result.data;
    setAxiosToken(token);
    return result.data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    await api.post('/users/logout');
    setAxiosToken('');
  } catch (error) {
    throw error;
  }
};

const avatar = async (image: FormData) => {
  try {
    const result = await api.patch('/users/avatar', image, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result.data.result;
  } catch (error) {
    throw error;
  }
};

export default {
  register,
  login,
  logout,
  avatar,
};
