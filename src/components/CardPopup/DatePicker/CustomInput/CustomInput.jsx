import { forwardRef } from 'react';

import * as S from './CustomInput.styled';

import icons from 'assets/sprite.svg';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <S.toggleDatePicker_button
    $degree={0}
    onClick={onClick}
    ref={ref}
    type="button"
  >
    Today, {value}
    <svg width={18} height={18}>
      <use href={`${icons}#icon-chevron-down`}></use>
    </svg>
  </S.toggleDatePicker_button>
));

CustomInput.displayName = 'CustomInput';

export default CustomInput;
