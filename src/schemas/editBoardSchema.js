import * as yup from 'yup';

export const editBoardSchema = yup.object({
  title: yup.string().max(30, 'Max length must be less than 30 chars'),
});
