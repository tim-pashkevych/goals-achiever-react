import styled from 'styled-components';

export const SInputWrapper_dev = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  gap: 14px;
  margin-bottom: 24px;
  width: 100%;
`;

export const SDiv_Input = styled.div`
  position: relative;
  width: 100%;
`;

export const SLabel_label = styled.label`
  position: relative;
  width: 100%;
`;

export const SInput_input = styled.input`
  margin-inline: auto;
  outline: none;
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? '#f16b6b' : theme.secondaryColor)};
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  opacity: 0.4;
  width: 287px;
  height: 49px;
  padding: 14px 18px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.columnName};

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media only screen and (max-width: 374.99px) {
    width: 200px;
  }

  @media only screen and (min-width: 768px) {
    width: 352px;
  }
`;

export const SEyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  fill: ${({ theme }) => theme.modalBackground};
  stroke: rgba(125, 125, 125, 1);
  z-index: 999;
  border: none;
  outline: none;
  transition: var(--transition);
  &.active {
    stroke: ${({ theme }) => theme.themeAccent};
  }
  &:active {
    stroke: ${({ theme }) => theme.themeAccent};
  }

  @media only screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      stroke: ${({ theme }) => theme.themeAccent};
    }

    @media only screen and (max-width: 374.99px) {
      right: 10px;
    }
  }
`;

export const SError_Message = styled.p`
  position: absolute;
  bottom: -8px;
  left: 9px;
  color: #f16b6b;
  background-color: ${({ theme }) => theme.modalBackground};
  text-align: left;
  font-size: 14px;
  padding: 0 8px;

  @media only screen and (max-width: 374.99px) {
    bottom: -6px;
    font-size: 9px;
    padding: 0 5px;
  }
`;
