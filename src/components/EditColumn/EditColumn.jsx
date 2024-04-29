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
import { Icon } from '..';

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
        <STitle>
          {titleModal.title}
          {actionType === 'delete' && (
            <span style={{ fontWeight: 700 }}>{placeholder}</span>
          )}
        </STitle>
        {actionType !== 'delete' && (
          <SInput
            name="title"
            type="text"
            placeholder={placeholder}
            value={value}
            autoFocus={true}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        )}
        {actionType !== 'delete' ? (
          <SButton onClick={(e) => onClick(e)}>
            <SImgContainer>
              <Icon id={'plus'} size={14} color="white" />
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
