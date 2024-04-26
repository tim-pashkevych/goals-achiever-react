import { useContext, useEffect, useState } from 'react';

import { Icon, Image, ThemeContext } from '../..';
import { boardIcons, boardImgIcons } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  createBoardThunk,
  selectBoardById,
  updateBoardByIdThunk,
} from '../../../redux';

import {
  SButton,
  SContainer,
  SFieldWrapp,
  SForm,
  SImgContainer,
  SInput,
  SLabel,
  SPLabel,
  SRadio,
  SRadioContainer,
  STitle,
} from './BoardForm.styled';

export const BoardForm = ({ boardId }) => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({});
  const board = useAppSelector((state) => selectBoardById(state, boardId));
  const boardImageIcons = boardImgIcons.filter((image) =>
    image.themes.includes(theme)
  );
  const imageSize = {
    width: 28,
    height: 28,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: formData.title,
      icon: formData.icon,
      backgroundImage: formData.backgroundImage,
    };

    if (boardId) {
      dispatch(updateBoardByIdThunk(boardId, data));
    } else {
      dispatch(createBoardThunk(data));
    }
  };

  return (
    <SContainer>
      <SForm onSubmit={handleSubmit}>
        <STitle>{board ? 'Edit board' : 'New board'}</STitle>
        <SInput
          type="text"
          name="title"
          value={board?.title}
          onChange={handleChange}
          autoFocus={true}
        />
        <SFieldWrapp>
          <SPLabel>Icons</SPLabel>
          <SRadioContainer $gap={'3px'}>
            {boardIcons.map((iconId) => (
              <SLabel key={iconId}>
                <SRadio
                  type="radio"
                  name="icon"
                  value={iconId}
                  onChange={handleChange}
                  checked={board.icon === iconId}
                />
                <Icon
                  id={iconId}
                  size={24}
                  stroke="rgba(255, 255, 255, 0.5)"
                  fill="rgba(0, 0, 0, 0)"
                />
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
                  name="backgroundImage"
                  value={image.key}
                  checked={board.backgroundImage === image.key}
                  onChange={handleChange}
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
          <SImgContainer>
            <img src="/svgs/plus.svg" alt="" width={14} height={14} />
          </SImgContainer>
          {board ? 'Edit' : 'Create'}
        </SButton>
      </SForm>
    </SContainer>
  );
};
