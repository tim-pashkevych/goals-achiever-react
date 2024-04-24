import React from 'react';
import { SRegister_form, SRegister_input } from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <div>
      <SRegister_form action="">
        <SRegister_input type="name" placeholder="Enter your name" />
        <SRegister_input type="email" placeholder="Enter your email" />
        <SRegister_input type="password" placeholder="Create a password" />
      </SRegister_form>
    </div>
  );
};
