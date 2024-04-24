import {
  Id,
  ICreateBoardRequestBody,
  IUpdateBoardRequestBody,
} from '../../types';
import { api } from '../axios';

const createBoard = async (data: ICreateBoardRequestBody) => {
  const result = await api.post('/boards', data);
  return result.data;
};

const getBoardById = async (id: Id) => {
  const result = await api.get(`/boards/${id}`);
  return result.data;
};

const updateBoardById = async (id: Id, data: IUpdateBoardRequestBody) => {
  const result = await api.patch(`/boards/${id}`, data);
  return result.data;
};

const deleteBoardById = async (id: Id) => {
  await api.delete(`/boards/${id}`);
};

export default { createBoard, getBoardById, updateBoardById, deleteBoardById };
