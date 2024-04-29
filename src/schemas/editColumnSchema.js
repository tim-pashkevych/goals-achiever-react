import * as yup from 'yup';

export const editColumnSchema = yup.object({
  title: yup
    .string()
    .min(3, 'Min length must be more than 3 chars')
    .max(20, 'Max length must be less than 20 chars'),
});
