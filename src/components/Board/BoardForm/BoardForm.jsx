import { useForm } from 'react-hook-form';

import { Button, Icon, Image, Loader } from '../..';
import { boardIcons, boardImgIcons } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { editBoardSchema } from '../../../schemas/editBoardSchema';
import {
  createBoardThunk,
  selectBoardById,
  selectIsBoardLoading,
  selectTheme,
  updateBoardByIdThunk,
} from '../../../redux';

import {
  SButton,
  SContainer,
  SFieldWrapp,
  SForm,
  SInput,
  SLabel,
  SPLabel,
  SRadio,
  SRadioContainer,
  STitle,
  SpError,
  SDiv,
} from './BoardForm.styled';
import { useNavigate } from 'react-router-dom';

export const BoardForm = ({ boardId, handleCloseModal }) => {
  const navigate = useNavigate();
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => selectBoardById(state, boardId));
  const isLoading = useAppSelector(selectIsBoardLoading);
  const boardImageIcons = boardImgIcons.filter((image) =>
    image.themes.includes(theme)
  );
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(editBoardSchema),
    defaultValues: {
      title: board?.title,
      icon: board?.icon || boardIcons[0],
      backgroundImage: board?.backgroundImage || boardImageIcons[0].key,
    },
    mode: 'onChange',
  });
  const imageSize = {
    width: 28,
    height: 28,
  };

  const onSubmit = (data) => {
    if (boardId) {
      dispatch(updateBoardByIdThunk({ newBoardBody: data, id: boardId }))
        .unwrap()
        .then(() => {
          navigate(`/home/${data.title}`);
          handleCloseModal();
        });
    } else {
      dispatch(createBoardThunk(data))
        .unwrap()
        .then(() => {
          navigate(`/home/${data.title}`);
          handleCloseModal();
        });
    }
  };

  return (
    <SContainer>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <STitle>{board ? 'Edit board' : 'New board'}</STitle>
        <SDiv>
          <SInput
            type="text"
            autoFocus={true}
            {...register('title')}
            placeholder="Title"
            $hasError={!!errors.title}
          />
          {errors.title?.message && dirtyFields && (
            <SpError>{errors.title.message}</SpError>
          )}
        </SDiv>

        <SFieldWrapp>
          <SPLabel>Icons</SPLabel>
          <SRadioContainer $gap={'11px'}>
            {boardIcons.map((iconId) => (
              <SLabel key={iconId}>
                <SRadio type="radio" {...register('icon')} value={iconId} />
                <Icon id={iconId} size={18} />
              </SLabel>
            ))}
          </SRadioContainer>
        </SFieldWrapp>
        <SFieldWrapp>
          <SPLabel>Background</SPLabel>
          <SRadioContainer $width={'252px'} $gap={'4px'}>
            {boardImageIcons.map((image) => (
              <SLabel key={image.key}>
                <SRadio
                  type="radio"
                  {...register('backgroundImage')}
                  value={image.key}
                />
                {
                  <Image
                    desktop={imageSize}
                    tablet={imageSize}
                    mobile={imageSize}
                    type="image/png"
                    pathKey={image.key}
                    alt={image.alt}
                    imageCategory={'boardIcons'}
                  />
                }
              </SLabel>
            ))}
          </SRadioContainer>
        </SFieldWrapp>
        <SButton>
          <Button
            type="submit"
            title={board ? 'Edit' : 'Create'}
            icon={true}
            size={'large'}
            style={{ width: 3340 }}
          />
        </SButton>
      </SForm>
      {isLoading && <Loader />}
    </SContainer>
  );
};
