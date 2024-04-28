import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import {
  createColumnThunk,
  deleteColumnByIdThunk,
  updateColumnByIdThunk,
} from '../../redux';
import {
  SButton,
  SButtonDelete,
  SContainer,
  SForm,
  SImgContainer,
  SInput,
  STitle,
} from './EditColumn.styled';

export const EditColumn = ({
  titleModal,
  placeholder,
  actionType,
  id,
  toggleModal,
}) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const onClick = (e) => {
    e.preventDefault();
    if (actionType === 'add') {
      dispatch(createColumnThunk({ boardId: id, title: value }));
      toggleModal();
    }
    if (actionType === 'edit') {
      dispatch(updateColumnByIdThunk({ id, newColumnBody: { title: value } }));
      toggleModal();
    }
    if (actionType === 'delete') {
      dispatch(deleteColumnByIdThunk(id));
      toggleModal();
    }
  };
  return (
    <SContainer>
      <SForm>
        <STitle>{titleModal.title}</STitle>
        {actionType !== 'delete' && (
          <SInput
            name="title"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        )}
        {actionType !== 'delete' ? (
          <SButton onClick={(e) => onClick(e)}>
            <SImgContainer>
              <img src="/svgs/plus.svg" alt="" width={14} height={14} />
            </SImgContainer>
            {titleModal.buttonText}
          </SButton>
        ) : (
          <SButtonDelete onClick={(e) => onClick(e)}>
            {titleModal.buttonText}
          </SButtonDelete>
        )}
      </SForm>
    </SContainer>
  );
};
