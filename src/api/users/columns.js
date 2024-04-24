import { api } from '../axios';

const create = async (data) => {
  const result = await api.post('/columns', data);
  return result.data;
};

const change = async (data) => {
  const result = await api.patch(`/columns/${data.id}`, data.title);
  return result.data;
};

const deleteById = async (id) => {
  const result = await api.delete(`/columns/${id}`);
  return result.data;
};

export default {
  create,
  change,
  deleteById,
};
