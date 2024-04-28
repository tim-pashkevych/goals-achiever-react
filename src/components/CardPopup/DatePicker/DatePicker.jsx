import ReactDatePicker from 'react-datepicker';

import CustomInput from './CustomInput/CustomInput.jsx';

import 'react-datepicker/dist/react-datepicker.css';
import s from './DatePicker.module.css';

// export const DatePicker = ({ onChange }: IDatePickerProps) => {
//   return (
//     <>
//       {/* <Controller
//         control={control}
//         name="ReactDatepicker"
//         defaultValue={value}
//         render={({ field }) => ( */}
//       <ReactDatePicker
//         calendarClassName={s.datapicker}
//         calendarStartDay={1}
//         minDate={new Date()}
//         onChange={(date) => {
//           console.log('date', date);
//           return onChange(date!);
//         }}
//         customInput={<CustomInput />}
//       />
//       {/* )}
//       /> */}
//     </>
//   );
// };

export const DatePicker = ({ onChange, field, ...restProps }) => {
  return (
    // <Controller
    //   control={control}
    //   name="ReactDatepicker"
    //   defaultValue={value}
    //   render={({ field }) => (
    <ReactDatePicker
      {...restProps}
      toggleCalendarOnIconClick
      onChange={(event) => {
        field.onChange(event);
        onChange(event);
      }}
      selected={field.value}
      minDate={new Date()}
      dateFormat="dd/MM/yyyy"
      calendarClassName={s.datapicker}
      customInput={<CustomInput />}
    />
    //   )}
    // />
  );
};
