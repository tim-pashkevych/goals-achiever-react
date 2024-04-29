import { useAppDispatch } from '../../hooks';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  createColumnThunk,
  deleteColumnByIdThunk,
  updateColumnByIdThunk,
} from '../../redux';

import {
  SButton,
  SButtonDelete,
  SForm,
  SImgContainer,
  SInput,
  STitle,
  SpError,
  SDiv,
  SIcon,
} from './EditColumn.styled';

const schema = yup.object().shape({
  title: yup.string().required('Title name is required'),
});

export const EditColumn = ({
  titleModal,
  placeholder,
  actionType,
  id,
  toggleModal,
}) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = ({ title }) => {
    switch (actionType) {
      case 'add':
        dispatch(createColumnThunk({ boardId: id, title: title }));
        break;
      case 'edit':
        dispatch(
          updateColumnByIdThunk({ id, newColumnBody: { title: title } })
        );
        break;
      case 'delete':
        dispatch(deleteColumnByIdThunk(id));
        break;
      default:
        break;
    }
    toggleModal();
  };
  return (
    <>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <STitle>
          {titleModal.title}
          {actionType === 'delete' && (
            <span style={{ fontWeight: 700 }}>{placeholder}</span>
          )}
        </STitle>
        {actionType !== 'delete' && (
          <SDiv>
            <SInput
              name="title"
              type="text"
              placeholder={placeholder}
              {...register('title')}
              $hasError={!!errors.title}
            />
            {errors.title && dirtyFields && (
              <SpError>{errors.title.message}</SpError>
            )}
          </SDiv>
        )}
        {actionType !== 'delete' ? (
          <SButton type="submit">
            <SImgContainer>
              <SIcon id="plus" size={14} />
            </SImgContainer>
            {titleModal.buttonText}
          </SButton>
        ) : (
          <SButtonDelete onClick={onSubmit} type="submit">
            {titleModal.buttonText}
          </SButtonDelete>
        )}
      </SForm>
    </>
  );
};
