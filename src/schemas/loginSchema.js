import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email().max(30, 'Max length must be less than 30 chars'),
  password: yup
    .string()
    .min(6, 'Min length must be more than 6 chars')
    .max(30, 'Max length must be less than 30 chars'),
});
