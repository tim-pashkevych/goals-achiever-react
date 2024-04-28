import ReactDatePicker from 'react-datepicker';

import CustomInput from './CustomInput/CustomInput';

import 'react-datepicker/dist/react-datepicker.css';
import s from './DatePicker.module.css';
import { useEffect, useRef, useState } from 'react';

// interface IDatePickerProps {
//   onChange: (date: Date) => void;
//   selected: Date;
// }

export const DatePicker = ({ onChange, selected } /* : IDatePickerProps */) => {
  const [isOpen, setIsOpen] = useState(false);
  // const ref = useRef < HTMLDivElement > null;
  const ref = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event /* : KeyboardEvent */) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event /* : MouseEvent */) => {
      if (
        ref.current &&
        !ref.current.contains(event.target /*  as HTMLDivElement */)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <ReactDatePicker
        selected={selected}
        calendarClassName={s.datapicker}
        open={isOpen}
        minDate={new Date()}
        onChange={(date) => {
          onChange(/* date! */ date), setIsOpen(false);
        }}
        dayClassName={(date) => {
          return date < new Date() ? 'disabled' : '';
        }}
        customInput={
          <CustomInput value={selected} isOpen={isOpen} setClose={setIsOpen} />
        }
      />
    </div>
  );
};
