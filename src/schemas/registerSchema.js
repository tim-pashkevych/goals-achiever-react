import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup.string().max(30, 'Max length must be less than 30 chars'),
  email: yup.string().email().max(30, 'Max length must be less than 30 chars'),
  password: yup
    .string()
    .min(8, 'Min length must be more than 8 chars')
    .max(30, 'Max length must be less than 30 chars'),
});
