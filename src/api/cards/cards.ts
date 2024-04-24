import { api } from '../axios';
import {
  Id,
  ICreateCardRequestBody,
  IUpdateCardRequestBody,
  IMoveCardRequestBody,
} from '../../types';

const createCard = async (data: ICreateCardRequestBody) => {
  const result = await api.post('/cards', data);
  return result.data;
};

const updateCardById = async (id: Id, data: IUpdateCardRequestBody) => {
  const result = await api.patch(`/cards/${id}`, data.title);
  return result.data;
};

const deleteCardById = async (id: Id) => {
  const result = await api.delete(`/cards/${id}`);
  return result.data;
};

const moveCardById = async (id: Id, data: IMoveCardRequestBody) => {
  const result = await api.patch(`/cards/${id}/move`, data);
  return result.data;
};

export default {
  createCard,
  updateCardById,
  deleteCardById,
  moveCardById,
};
