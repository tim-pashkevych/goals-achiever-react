import { SRegister_form, SRegister_input } from './RegisterForm.styled';

export const RegisterForm = ({ handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
      </SRegister_form>
    </div>
  );
};
