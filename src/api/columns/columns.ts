import { api } from '../axios';
import {
  Id,
  ICreateColumnRequestBody,
  IUpdateColumnRequestBody,
} from '../../types';

const createColumn = async (data: ICreateColumnRequestBody) => {
  const result = await api.post('/columns', data);
  return result.data;
};

const updateColumnById = async (id: Id, data: IUpdateColumnRequestBody) => {
  const result = await api.patch(`/columns/${id}`, data.title);
  return result.data;
};

const deleteColumnById = async (id: Id) => {
  const result = await api.delete(`/columns/${id}`);
  return result.data;
};

export default {
  createColumn,
  updateColumnById,
  deleteColumnById,
};
