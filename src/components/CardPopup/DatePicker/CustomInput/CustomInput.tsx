import { forwardRef, useEffect, useState } from 'react';

import * as S from './CustomInput.styled';

import icons from 'assets/sprite.svg';

interface CustomInputProps {
  value: Date;
  onClick: (date: Date) => void;
}

const CustomInput = forwardRef(
  ({ value = new Date(), onClick }: CustomInputProps, ref) => {
    const initialDate = new Date(value);

    const [selectedDate, setSelectedDate] = useState(initialDate);
    const [isClicked, setIsClicked] = useState(false);

    const formattedDate = `${selectedDate.getDate()}-${
      selectedDate.getMonth() + 1
    }-${selectedDate.getFullYear()}`;

    useEffect(() => {
      setSelectedDate(new Date(value));
    }, [value]);

    return (
      <S.toggleDatePicker_button
        $degree={isClicked ? 180 : 0}
        ref={ref}
        onClick={(event) => {
          setIsClicked(!isClicked);
          console.log(event);
          onClick(event);
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
