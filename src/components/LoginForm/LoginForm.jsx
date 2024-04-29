import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginThunk, selectIsUserLoading } from '../../redux';
import { Button, Loader } from '..';
import { loginSchema } from '../../schemas/loginSchema';
import {
  SLogin_form,
  SLogin_input,
  SDiv_Pass,
  SDiv_Input,
  Sp_Error,
  SIcon,
} from './LoginForm.styled';

export const LoginForm = () => {
  const isLoading = useAppSelector(selectIsUserLoading);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
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
        toast.error(error);
      });
  };
  return (
    <div>
      <SLogin_form action="" onSubmit={handleSubmit(handleSubmitLog)}>
        <SDiv_Input>
          <SLogin_input
            type="email"
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
        <SDiv_Pass>
          <SDiv_Input>
            <SLogin_input
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
        </SDiv_Pass>

        <Button title="Log In Now" icon={false} />
      </SLogin_form>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
    </div>
  );
};
