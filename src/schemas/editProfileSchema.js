import * as yup from 'yup';

export const editProfileSchema = yup.object({
  name: yup.string().max(30, 'Max length must be less than 30 chars'),
  email: yup.string().max(30, 'Max length must be less than 30 chars'),
  password: yup.string().max(30, 'Max length must be less than 30 chars'),
});
