import { api } from '../axios';

const create = async (data) => {
  const result = await api.post('/cards', data);
  return result.data;
};

const updateById = async ({ id, ...rest }) => {
  const result = await api.patch(`/cards/${id}`, rest);
  return result.data;
};

const deleteById = async (id) => {
  const result = await api.delete(`/cards/${id}`);
  return result.data;
};

const moveById = async ({ id, ...rest }) => {
  const result = await api.patch(`/cards/${id}/move`, rest);
  return result.data;
};

export default {
  create,
  updateById,
  deleteById,
  moveById,
};
