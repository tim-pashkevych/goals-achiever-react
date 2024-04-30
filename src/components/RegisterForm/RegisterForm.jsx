import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, Loader } from '..';
import { registerSchema } from '../../schemas/registerSchema';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginThunk, registerThunk, selectIsUserLoading } from '../../redux';

import {
  SRegister_form,
  SRegister_input,
  Sp_Error,
  SDiv_Input,
  SIcon,
  SDivPass,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const [showPass, setShowPass] = useState(false);
  const isLoading = useAppSelector(selectIsUserLoading);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({ mode: 'onChange', resolver: yupResolver(registerSchema) });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (data) => {
    setError('');

    dispatch(registerThunk(data))
      .unwrap()
      .then(() => {
        dispatch(loginThunk({ email: data.email, password: data.password }));

        navigate('/home');
      })
      .catch((error) => {
        setError(error);

        if (error === 'Email in use') {
          toast.error('User already exists. Please choose a different email.');
        } else {
          toast.error('Sorry, something went wrong. Please try again later.');
        }
      });
  };

  return (
    <>
      <SRegister_form action="" onSubmit={handleSubmit(handleSubmitForm)}>
        <SDiv_Input>
          <SRegister_input
            type="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            {...register('name')}
            $hasError={!!errors.name}
          />
          {errors.name?.message && dirtyFields && (
            <Sp_Error>{errors.name.message}</Sp_Error>
          )}
        </SDiv_Input>

        <SDiv_Input>
          <SRegister_input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            {...register('email')}
            $hasError={!!errors.email}
          />
          {errors.email?.message && dirtyFields && (
            <Sp_Error>{errors.email.message} </Sp_Error>
          )}
        </SDiv_Input>
        <SDivPass>
          <SDiv_Input>
            <SRegister_input
              type={showPass ? 'text' : 'password'}
              name="password"
              placeholder="Create a password"
              onChange={handleChange}
              {...register('password')}
              $hasError={!!errors.password}
            />
            {errors.password?.message && dirtyFields && (
              <Sp_Error>{errors.password.message}</Sp_Error>
            )}
            <button type="button" onClick={() => setShowPass((prev) => !prev)}>
              {showPass ? (
                <SIcon id="eye" className="icon" size="18" />
              ) : (
                <SIcon id="eye-off" className="icon" size="18" />
              )}
            </button>
          </SDiv_Input>
        </SDivPass>
        <Button type="submit" title="Register Now" icon={false} />
      </SRegister_form>
      {isLoading && <Loader />}

      {error && <div>{error}</div>}
    </>
  );
};
