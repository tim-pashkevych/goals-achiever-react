import ReactDatePicker from 'react-datepicker';

import CustomInput from './CustomInput/CustomInput';

import 'react-datepicker/dist/react-datepicker.css';
import s from './DatePicker.module.css';

interface IDatePickerProps {
  onChange: (date: Date) => void;
}

export const DatePicker = ({ onChange }: IDatePickerProps) => {
  return (
    <>
      {/* <Controller
        control={control}
        name="ReactDatepicker"
        defaultValue={value}
        render={({ field }) => ( */}
      <ReactDatePicker
        calendarClassName={s.datapicker}
        calendarStartDay={1}
        minDate={new Date()}
        onChange={(date) => onChange(date!)}
        customInput={<CustomInput />}
      />
      {/* )}
      /> */}
    </>
  );
};
