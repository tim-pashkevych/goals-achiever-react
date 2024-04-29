import styled from 'styled-components';

// export const SContainer = styled.div`
//   max-width: 350px;
//   border-radius: 8px;
//   font-family: 'Poppins', sans-serif;
//   background-color: ${({ theme }) => theme.modalBackground};
//   letter-spacing: -0.02em;

//   width: 302px;
// `;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.modalBackground};

  width: 287px;

  @media only screen and (max-width: 374.99px) {
    width: 200px;
  }

  @media only screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const STitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.column_edit_text};

  margin: 0;
`;

export const SDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const SInput = styled.input`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.column_edit_text};
  background-color: ${({ theme }) => theme.modalBackground};

  width: 100%;
  height: 49px;
  outline: none;
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? '#f16b6b' : theme.secondaryColor)};
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  padding: 14px 18px;
  border-radius: 8px;
  transition: var(--transition);

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`;

export const SImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.buttonIconBackground};

  svg {
    fill: ${({ theme }) => theme.buttonIconColor};
    stroke: ${({ theme }) => theme.buttonIconColor};
  }
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

export const SpError = styled.p`
  position: absolute;
  bottom: -8px;
  left: 9px;
  color: #f16b6b;
  background-color: #151515;
  text-align: left;
  font-size: 14px;
  padding: 0 8px;

  @media only screen and (max-width: 374.99px) {
    bottom: -6px;
    font-size: 9px;
    padding: 0 5px;
  }
`;
