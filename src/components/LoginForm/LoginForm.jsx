import { SLogin_form, SLogin_input } from './LoginForm.styled';

export const LoginForm = ({ handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
      </SLogin_form>
    </div>
  );
};
