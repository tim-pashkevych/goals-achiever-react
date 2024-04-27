import styled from 'styled-components';

export const SContainer = styled.div`
  max-width: 350px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme }) => theme.modalBackground};
  letter-spacing: -0.02em;

  width: 302px;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const STitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.column_edit_text};

  margin: 0;
`;

export const SInput = styled.input`
  display: block;
  font-weight: 500;
  font-size: 14px;
  background-color: ${({ theme }) => theme.modalBackground};

  margin: 0;
  outline: none;
  border: 1px solid #bedbb069;
  padding: 14px 18px;
  border-radius: 8px;
  transition: var(--transition);
  &:focus,
  &:active {
    border: 1px solid #bedbb0;
  }
`;

export const SImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161616;
  width: 28px;
  height: 28px;
  border-radius: 8px;
`;

export const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.secondaryColor};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.buttonTextColor};
  border: none;

  transition: var(--transition);

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.secondaryColorHover};

    outline: none;
  }
`;

export const SButtonDelete = styled(SButton)`
  background-color: #e09cb5;
  color: white;
  &:active,
  &:hover,
  &:focus {
    background-color: #f5226f;
  }
`;
