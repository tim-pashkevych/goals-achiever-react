import { useState } from 'react';

import { useAppDispatch } from '../../hooks';
import { loginThunk } from '../../redux';
import { Button } from '..';
import { SLogin_form, SLogin_input } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: formData.email,
      password: formData.password,
    };
    dispatch(loginThunk(data));
  };
  return (
    <div>
      <SLogin_form action="" onSubmit={handleSubmit}>
        <SLogin_input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <SLogin_input
          type="password"
          name="password"
          placeholder="Create a password"
          onChange={handleChange}
        />
        <Button title="Log In Now" icon={false} />
      </SLogin_form>
    </div>
  );
};
