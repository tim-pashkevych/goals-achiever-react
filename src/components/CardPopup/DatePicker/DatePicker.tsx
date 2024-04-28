import ReactDatePicker from 'react-datepicker';

import CustomInput from './CustomInput/CustomInput';

import 'react-datepicker/dist/react-datepicker.css';
import s from './DatePicker.module.css';

interface IDatePickerProps {
  onChange: (date: Date) => void;
  selected: Date;
}

export const DatePicker = ({ onChange, selected }: IDatePickerProps) => {
  return (
    <>
      <ReactDatePicker
        selected={selected}
        calendarClassName={s.datapicker}
        calendarStartDay={1}
        minDate={new Date()}
        onChange={(date) => onChange(date!)}
        customInput={<CustomInput value={selected} onClick={onChange} />}
      />
    </>
  );
};
