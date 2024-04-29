import { useAppDispatch } from '../../hooks';
import * as yup from 'yup';
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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: actionType === 'edit' ? placeholder : '',
    },
  });

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
    <SContainer>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <STitle>
          {titleModal.title}
          {actionType === 'delete' && (
            <span style={{ fontWeight: 700 }}>{placeholder}</span>
          )}
        </STitle>
        {actionType !== 'delete' && (
          <>
            <SInput
              name="title"
              type="text"
              placeholder={placeholder}
              {...register('title')}
              style={
                errors.title
                  ? { borderColor: 'red' }
                  : { borderColor: '#bedbb069' }
              }
            />
            {errors.title && (
              <span style={{ color: 'red' }}>{errors.title.message}</span>
            )}
          </>
        )}
        {actionType !== 'delete' ? (
          <SButton type="submit">
            <SImgContainer>
              <Icon id={'plus'} size={14} color="white" />
            </SImgContainer>
            {titleModal.buttonText}
          </SButton>
        ) : (
          <SButtonDelete onClick={onSubmit} type="submit">
            {titleModal.buttonText}
          </SButtonDelete>
        )}
      </SForm>
    </SContainer>
  );
};
