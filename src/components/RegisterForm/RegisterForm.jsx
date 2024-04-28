import { useState } from 'react';

import { useAppDispatch } from '../../hooks';
import { registerThunk } from '../../redux';
import { Button } from '..';
import { SRegister_form, SRegister_input } from './RegisterForm.styled';
import { registerSchema } from '../../schemas/registerSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(registerSchema) });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (data) => {
    setError('');
    console.log(data);
    dispatch(registerThunk(data))
      .unwrap()
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <SRegister_form action="" onSubmit={handleSubmit(handleSubmitForm)}>
        <SRegister_input
          type="name"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          {...register('name')}
        />
        {errors.name?.message && <div>{errors.name.message}</div>}
        <SRegister_input
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          {...register('email')}
        />
        {errors.email?.message && <div>{errors.email.message}</div>}
        <SRegister_input
          type="password"
          name="password"
          placeholder="Create a password"
          onChange={handleChange}
          {...register('password')}
        />
        {errors.password?.message && <div>{errors.password.message}</div>}
        <Button title="Register Now" icon={false} />
      </SRegister_form>

      {error && <div>{error}</div>}
    </div>
  );
};
