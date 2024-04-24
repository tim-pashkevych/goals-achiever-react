import styled from 'styled-components';

export const buttonSizes = {
  small: { height: '36px', width: '40px' },
  medium: { height: '49px', width: '100%' },
  large: { height: '56px', width: '100%' },
};

export const SButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;

  background-color: #bedbb0;

  width: 100%;
  height: 49px;

  border: none;

  border-radius: 8px;

  font-size: 14px;
  letter-spacing: -2%;
  line-height: 21px;

  transition: var(--transition);

  &:hover,
  &:active,
  &:focus {
    background-color: #9dc888;
    outline: none;
  }

  height: ${(props) => buttonSizes[props.size].height};
  width: ${(props) => buttonSizes[props.size].width};
`;

export const IconWrapper = styled.div`
  width: 28px;
  height: 28px;

  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
`;