import styled from 'styled-components';

export const SLogin_form = styled.form`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SLogin_input = styled.input`
  width: 100%;
  height: 49px;
  padding-left: 14px;
  display: flex;
  border-radius: 7px;
  outline: none;
  border: 1px solid;
  border-color: ${({ theme }) => theme.secondaryColor};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textOne};
  &:hover,
  &:active,
  &:focus {
    border-color: ${({ theme }) => theme.secondaryColorHover};
  }
`;
