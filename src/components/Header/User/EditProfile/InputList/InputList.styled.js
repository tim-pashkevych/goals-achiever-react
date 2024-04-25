import styled from 'styled-components';

export const SInputWrapper_dev = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;
export const SLabel_label = styled.label`
  width: 100%;
  position: relative;
`;

export const SInput_input = styled.input`
  outline: 1px solid ${({ theme }) => theme.inputBorder};
  border: none;
  border-radius: 8px;
  width: 287px;
  height: 49px;
  padding: 14px 18px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.userProfile};
  background-color: ${({ theme }) => theme.modalBackground};

  &:active {
    outline: 2px solid ${({ theme }) => theme.inputBorder};
  }

  @media only screen and (min-width: 768px) {
    width: 352px;
  }
  @media only screen and (min-width: 1440px) {
    &:focus,
    &:hover {
      outline: 2px solid ${({ theme }) => theme.inputBorder};
    }
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
  }
`;
