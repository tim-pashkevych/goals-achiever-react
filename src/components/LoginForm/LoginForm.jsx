import { useState } from 'react';

import { useAppDispatch } from '../../hooks';
import { loginThunk } from '../../redux';
import { Button } from '..';
import { SLogin_form, SLogin_input } from './LoginForm.styled';
import { loginSchema } from '../../schemas/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(loginSchema) });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitLog = (data) => {
    setError('');
    dispatch(loginThunk(data))
      .unwrap()
      .catch((error) => {
        setError(error);

        if (error.includes('401')) {
          toast.error('Email or password is wrong.');
        } else {
          toast.error('Sorry, something went wrong. Please try again later.');
        }
      });
  };
  return (
    <div>
      <SLogin_form action="" onSubmit={handleSubmit(handleSubmitLog)}>
        <SLogin_input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          {...register('email')}
        />
        {errors.name?.message && <div>{errors.name.message}</div>}
        <SLogin_input
          type="password"
          name="password"
          placeholder="Create a password"
          onChange={handleChange}
          {...register('password')}
        />
        {errors.name?.message && <div>{errors.name.message}</div>}
        <Button title="Log In Now" icon={false} />
      </SLogin_form>
      {error && <div>{error}</div>}
    </div>
  );
};
