import { useState } from 'react';

import { useAppDispatch } from '../../hooks';
import { registerThunk } from '../../redux';
import { Button } from '..';
import { SRegister_form, SRegister_input } from './RegisterForm.styled';

export const RegisterForm = () => {
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
      name: formData.name,
    };
    dispatch(registerThunk(data));
  };

  return (
    <div>
      <SRegister_form action="" onSubmit={handleSubmit}>
        <SRegister_input
          type="name"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <SRegister_input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <SRegister_input
          type="password"
          name="password"
          placeholder="Create a password"
          onChange={handleChange}
        />
        <Button title="Register Now" icon={false} />
      </SRegister_form>
    </div>
  );
};
