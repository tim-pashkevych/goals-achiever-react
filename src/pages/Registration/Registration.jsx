import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/authSlice/operations';

export const Registration = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = (data) => {
    dispatch(registerThunk(data));
    reset();
  };
  return (
    <div>
      <a href="">Registration</a>
      <a href="">Log In</a>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>Register Now</button>
      </form>
    </div>
  );
};
