//installed libraries
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { nanoid } from '@reduxjs/toolkit';

//global folders
import { Priorities, PriorityColor } from '../../constants';
import icons from 'assets/sprite.svg';

//local folder
import { CardSchema } from './yupSchema';
import { IFormData, ActionType, ICardPopupProps } from './types';
import { DatePicker } from './DatePicker/DatePicker';

//styles
import * as S from './CardPopup.styled';

const CardPopup = ({
  actionType = ActionType.Add,
  onSave = () => console.log('You forgot to bring the onSave function'),
  cardData = { title: '', deadline: '', description: '', priority: '' },
}: ICardPopupProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...cardData,
    },
    resolver: yupResolver(CardSchema),
  });

  const onSubmit = (data: IFormData) => {
    onSave(data);
    reset();
  };

  return (
    <S.popupContainer_div>
      <S.popupName_p>{actionType} card</S.popupName_p>
      <S.cardDataForm_form onSubmit={handleSubmit(onSubmit)}>
        <S.formFieldWrapper_label $marginBottom="14px">
          <S.title_input
            {...register('title')}
            placeholder="Title"
          ></S.title_input>
          {errors.title && (
            <S.errorMessage_p $position="top : -20px">
              {errors.title.message}
            </S.errorMessage_p>
          )}
        </S.formFieldWrapper_label>
        <S.formFieldWrapper_label $marginBottom="24px">
          <S.description_textarea
            {...register('description')}
            placeholder="Description"
          ></S.description_textarea>
          {errors.description && (
            <S.errorMessage_p $position="bottom: -21px">
              {errors.description.message}
            </S.errorMessage_p>
          )}
        </S.formFieldWrapper_label>
        <S.propertyWrapper_div $marginBottom="14px">
          Label color
          <S.radioGroup_ul>
            {Priorities.map((priority) => (
              <li key={nanoid()}>
                <label>
                  <input
                    type="radio"
                    value={priority}
                    {...register('priority')}
                    hidden
                  />
                  <S.customRadioButton_span
                    $color={PriorityColor[priority]}
                  ></S.customRadioButton_span>
                </label>
              </li>
            ))}
          </S.radioGroup_ul>
          {errors.priority && (
            <S.errorMessage_p $position="bottom: -18px">
              {errors.priority.message}
            </S.errorMessage_p>
          )}
        </S.propertyWrapper_div>
        <S.propertyWrapper_div $marginBottom="40px">
          Deadline
          {/* <input
            type="date"
            {...register('deadline')}
            style={{ width: '120px' }}
          /> */}
          <DatePicker onChange={(data) => console.log(data)} />
          {errors.deadline && (
            <S.errorMessage_p $position="bottom: -22px">
              {errors.deadline.message}
            </S.errorMessage_p>
          )}
        </S.propertyWrapper_div>
        <S.onSaveButton_button type="submit">
          <S.plusIconContainer_span>
            <svg width={14} height={14}>
              <use href={`${icons}#icon-plus`}></use>
            </svg>
          </S.plusIconContainer_span>
          {actionType}
        </S.onSaveButton_button>
      </S.cardDataForm_form>
    </S.popupContainer_div>
  );
};

export default CardPopup;
