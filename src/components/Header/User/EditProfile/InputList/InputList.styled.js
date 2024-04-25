import styled from 'styled-components';

export const SInputWrapper_dev = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 352px;
  margin-bottom: 24px;
`;

export const SInput_input = styled.input`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  height: 49px;
  padding: 14px 18px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.userProfile};

  background-color: ${({ theme }) => theme.modalBackground};

  &:hover,
  &:focus,
  &:active {
    outline: 1px solid ${({ theme }) => theme.inputBorder};
  }
`;
