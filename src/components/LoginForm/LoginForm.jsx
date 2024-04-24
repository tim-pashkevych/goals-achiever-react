import React from 'react';
import { SLogin_form, SLogin_input } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <div>
      <SLogin_form action="">
        <SLogin_input type="email" placeholder="Enter your email" />
        <SLogin_input type="password" placeholder="Create a password" />
      </SLogin_form>
    </div>
  );
};
