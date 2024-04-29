import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email')
    .max(30, 'Max length must be less than 30 chars'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Min length must be more than 8 chars')
    .max(30, 'Max length must be less than 30 chars'),
});
