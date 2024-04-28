import styled from 'styled-components';

export const SDivForm = styled.div`
  background-color: ${({ theme }) => theme.modalBackground};
  display: flex;
  flex-direction: column;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
`;

export const Sp = styled.p`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.columnName};
  margin-bottom: 24px;
`;

export const SDiv = styled.div`
  position: relative;
  margin-bottom: 14px;

  &.wrapperText {
    margin-bottom: 24px;
  }
`;

export const SInput = styled.input`
  outline: none;
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? '#f16b6b' : theme.secondaryColor)};
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  opacity: 0.4;
  width: 100%;
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
`;

export const STextarea = styled.textarea`
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? '#f16b6b' : theme.secondaryColorHover};
  outline: none;
  border-radius: 8px;
  width: 100%;
  height: 120px;
  resize: none;
  padding: 14px 18px;
  vertical-align: top;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.columnName};
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const SpError = styled.p`
  position: absolute;
  bottom: -13px;
  left: 5px;
  color: #f16b6b;
  text-align: left;
  font-size: 10px;
  padding-left: 10px;
`;

export const SButton = styled.button`
  border-radius: 8px;
  width: 287px;
  height: 49px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.buttonTextColor};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.secondaryColorHover};
  }

  @media only screen and (max-width: 375px) {
    width: 90%;
  }

  @media only screen and (min-width: 768px) {
    width: 352px;
  }
`;
