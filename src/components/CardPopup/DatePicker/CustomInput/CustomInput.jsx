import { forwardRef, useEffect, useState } from 'react';

import * as S from './CustomInput.styled';

import icons from 'assets/sprite.svg';
import { formatDate } from '../convertDateFunction';

const CustomInput = forwardRef(
  ({ value = new Date(), isOpen, setClose }, ref) => {
    const initialDate = new Date(value);

    const [selectedDate, setSelectedDate] = useState(initialDate);
    const formattedDate = formatDate(selectedDate);

    useEffect(() => {
      setSelectedDate(new Date(value));
    }, [value]);

    return (
      <S.toggleDatePicker_button
        $degree={isOpen ? 180 : 0}
        ref={ref}
        onMouseDown={(event) => {
          event.preventDefault();
          setClose(!isOpen);
        }}
        type="button"
      >
        {formattedDate}
        <svg width={18} height={18}>
          <use href={`${icons}#icon-chevron-down`}></use>
        </svg>
      </S.toggleDatePicker_button>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
