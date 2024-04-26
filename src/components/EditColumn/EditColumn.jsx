import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { createColumnThunk, updateColumnByIdThunk } from '../../redux';
import {
  SButton,
  SContainer,
  SForm,
  SImgContainer,
  SInput,
  STitle,
} from './EditColumn.styled';

export const EditColumn = ({
  title,
  buttonText,
  placeholder,
  actionType,
  id,
}) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const onClick = (e) => {
    e.preventDefault();
    if (actionType === 'add') {
      dispatch(createColumnThunk({ boardId: id, title: value }));
    }
    if (actionType === 'edit') {
      try {
        console.log('id', id);
        dispatch(updateColumnByIdThunk(id, { title: value }));
        console.log('edddiiiiit');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <SContainer>
      <SForm>
        <STitle>{title}</STitle>
        <SInput
          name="title"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            console.log('e.target.value', e.target.value);
            setValue(e.target.value);
          }}
        />
        <SButton onClick={(e) => onClick(e)}>
          <SImgContainer>
            <img src="/svgs/plus.svg" alt="" width={14} height={14} />
          </SImgContainer>
          {buttonText}
        </SButton>
      </SForm>
    </SContainer>
  );
};
