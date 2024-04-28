import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import {
  SDiv,
  SForm,
  SButton,
  SInput,
  Sp,
  STextarea,
  SpError,
  SDivForm,
} from './NeedHelpForm.styled';
import { useAppDispatch } from '../../hooks';
import { NeedHelpFormSchema } from '../../schemas/NeedHelpFormSchema';
import { issuesThunk } from '../../redux';

export const NeedHelpForm = ({ toggleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(NeedHelpFormSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (userData) => {
    dispatch(issuesThunk(userData))
      .unwrap()
      .then(() => {
        toggleModal();
        toast.success(
          'Your request has been successfully sent! Please, check your mail.'
        );
      })
      .catch(() => {
        toast.error('An error occurred. Please try again later.');
      });
  };

  return (
    <SDivForm>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <Sp>Need help</Sp>
        <SDiv>
          <SInput
            type="text"
            name="email"
            placeholder="Email address"
            {...register('email')}
            $hasError={!!errors.email}
          />
          {errors.email?.message && dirtyFields && (
            <SpError>{errors.email.message}</SpError>
          )}
        </SDiv>

        <SDiv className="wrapperText">
          <STextarea
            type="text"
            name="message"
            placeholder="Comment"
            {...register('message')}
            $hasError={!!errors.message}
          />
          {errors.message?.message && dirtyFields && (
            <SpError>{errors.message.message}</SpError>
          )}
        </SDiv>

        <SButton type="submit">Send</SButton>
      </SForm>
    </SDivForm>
  );
};
