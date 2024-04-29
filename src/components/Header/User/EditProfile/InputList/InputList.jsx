import { useState } from 'react';
import { Icon } from '../../../../Icon/Icon';

import {
  SEyeButton,
  SInputWrapper_dev,
  SInput_input,
  SLabel_label,
  SError_Message,
  SDiv_Input,
} from './InputList.styled';

export const InputList = ({ register, current, errors }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleEyeClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <SInputWrapper_dev>
      <SDiv_Input>
        <SLabel_label>
          <SInput_input
            {...register('name')}
            defaultValue={current.name}
            className={errors.name ? 'has-error' : ''}
            $hasError={!!errors.name}
          />
        </SLabel_label>
        {errors.name && <SError_Message>{errors.name.message}</SError_Message>}
      </SDiv_Input>
      <SDiv_Input>
        <SLabel_label>
          <SInput_input
            {...register('email')}
            defaultValue={current.email}
            className={errors.email ? 'has-error' : ''}
            $hasError={!!errors.email}
          />
        </SLabel_label>
        {errors.email && (
          <SError_Message>{errors.email.message}</SError_Message>
        )}
      </SDiv_Input>
      <SDiv_Input>
        <SLabel_label>
          <SInput_input
            {...register('password')}
            placeholder="password"
            className={errors.password ? 'has-error' : ''}
            type={isVisible ? 'text' : 'password'}
            $hasError={!!errors.password}
          />
          <SEyeButton
            onClick={handleEyeClick}
            type="button"
            className={isVisible ? 'active' : ''}
          >
            {isVisible ? (
              <Icon id="eye" className="icon" size="18" />
            ) : (
              <Icon id="eye-off" className="icon" size="18" />
            )}
          </SEyeButton>
        </SLabel_label>
        {errors.password && (
          <SError_Message>{errors.password.message}</SError_Message>
        )}
      </SDiv_Input>
    </SInputWrapper_dev>
  );
};
