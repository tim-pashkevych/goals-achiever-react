import { SInputWrapper_dev, SInput_input } from './InputList.styled';

export const InputList = ({ register, current }) => {
  return (
    <SInputWrapper_dev>
      <SInput_input {...register('name')} placeholder={current.name} />

      <SInput_input {...register('email')} placeholder={current.email} />

      <SInput_input
        {...register('password')}
        placeholder="password"
        type={'password'}
      />
    </SInputWrapper_dev>
  );
};
