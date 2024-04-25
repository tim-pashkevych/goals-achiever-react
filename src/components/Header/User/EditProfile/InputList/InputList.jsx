import { useState } from 'react';
import { Icon } from '../../../../Icon/Icon';
import {
  SEyeButton,
  SInputWrapper_dev,
  SInput_input,
  SLabel_label,
} from './InputList.styled';

export const InputList = ({ register, current }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleEyeClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <SInputWrapper_dev>
      <SLabel_label>
        <SInput_input {...register('name')} placeholder={current.name} />
      </SLabel_label>
      <SLabel_label>
        <SInput_input {...register('email')} placeholder={current.email} />
      </SLabel_label>
      <SLabel_label>
        <SInput_input
          {...register('password')}
          placeholder="password"
          type={isVisible ? 'text' : 'password'}
        />
        <SEyeButton
          onClick={handleEyeClick}
          type="button"
          className={isVisible ? 'active' : ''}
        >
          <Icon id={'eye'} size={18} />
        </SEyeButton>
      </SLabel_label>
    </SInputWrapper_dev>
  );
};
