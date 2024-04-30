import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { Loader } from '../Loader/Loader';
import { IssuesFormSchema } from '../../schemas/issuesFormSchema';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { issuesThunk, selectIsUserLoading } from '../../redux';

import {
  SDiv,
  SForm,
  SButton,
  SInput,
  Sp,
  STextarea,
  SpError,
} from './NeedHelpForm.styled';

export const NeedHelpForm = ({ toggleModal }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsUserLoading);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(IssuesFormSchema),
  });

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
    <>
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
            <SpError>{errors.email.message} </SpError>
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
      {isLoading && <Loader />}
    </>
  );
};
