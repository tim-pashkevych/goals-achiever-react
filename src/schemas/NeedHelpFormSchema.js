import * as yup from 'yup';

export const NeedHelpFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid Email')
    .required('Email is required')
    .max(64, 'Max length must be less than 64 chars'),
  message: yup
    .string()
    .required('Message is required')
    .min(3, 'Your message should be 3 or more characters'),
});
