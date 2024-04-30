import * as yup from 'yup';
import { email_regx } from '../constants/email_regx';

export const editProfileSchema = yup.object().shape({
  name: yup
    .string()
    .max(30, 'Max length must be less than 30 chars')
    .required('Name is required'),
  email: yup
    .string()
    .matches(email_regx, 'Enter a valid email')
    .max(30, 'Max length must be less than 30 chars')
    .required('Email is required'),
  password: yup
    .string()
    .test('', 'Min length must be more than 8 chars', function (value) {
      if (value === '') return true;
      if (value.length < 8) return false;
      return true;
    })
    .notRequired()
    .max(30, 'Max length must be less than 30 chars'),
});
