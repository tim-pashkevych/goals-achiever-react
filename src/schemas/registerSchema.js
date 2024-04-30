import * as yup from 'yup';
import { email_regx } from '../constants/email_regx';

export const registerSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .max(30, 'Max length must be less than 30 chars'),
  email: yup
    .string()
    .required('Email is required')
    .matches(email_regx, 'Enter a valid email')
    .max(30, 'Max length must be less than 30 chars'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Min length must be more than 8 chars')
    .max(30, 'Max length must be less than 30 chars'),
});
