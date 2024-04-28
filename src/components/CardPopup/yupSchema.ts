import * as yup from 'yup';

export const CardSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  priority: yup.string().required('You need to choose the label color'),
  deadline: yup.string().required('Deadline is required'),
});

// export const AddCardSchema = yup.object({
//   title: yup.string().required(),
//   description: yup.string().required(),
//   priority: yup.string().required(),
//   deadline: yup.string().datetime().required(),
// });

// export const EditCardSchema = yup
//   .object({
//     title: yup.string(),
//     description: yup.string(),
//     priority: yup.string(),
//     deadline: yup.string().datetime(),
//   })
//   .required();
