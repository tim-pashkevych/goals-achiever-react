import styled from 'styled-components';

export const SContainer = styled.div`
  max-width: 335px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  background-color: ${({ theme }) => theme.modalBackground};
  letter-spacing: -0.02em;

  @media only screen and (min-width: 768px) {
    max-width: 350px;
  }
`;

export const SRadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.$gap ? props.$gap : 0)};
  width: ${(props) => (props.$width ? props.$width : '287px')};
`;

export const SFieldWrapp = styled.div``;

export const SImageWrapp = styled.div``;

export const SPLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.textOne};
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const STitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.columnName};
  margin: 0;
`;

export const SInput = styled.input`
  display: block;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.textField_Text};
  margin: 0;
  background-color: ${({ theme }) => theme.popup_Background};
  outline: none;
  border: 1px solid #bedbb069;
  padding: 14px 18px;
  border-radius: 8px;
  &:focus,
  &:active {
    border: 1px solid #bedbb0;
  }
`;
export const SLabel = styled.label`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;

  svg {
    stroke: ${({ theme }) => theme.icon_Column};
    fill: rgba(0, 0, 0, 0);
  }

  svg:hover {
    stroke: ${({ theme }) => theme.icon_Column_Hover};
    cursor: pointer;
  }

  input[type='radio']:checked + svg {
    stroke: ${({ theme }) => theme.icon_Column_Hover};
  }

  picture img:hover,
  picture img:active {
    border: 2px solid ${({ theme }) => theme.icon_Column_Hover};
    border-radius: 6px;
    cursor: pointer;
  }

  input[type='radio']:checked + picture img {
    border: 2px solid ${({ theme }) => theme.icon_Column_Hover};
    border-radius: 6px;
  }
`;

export const SRadio = styled.input`
  visibility: hidden;

  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  outline: 0;
  outline-offset: 0;
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

export const SButton = styled.div`
  width: 287px;
  flex-basis: auto;

  @media only screen and (min-width: 768px) {
    width: 302px;
  }
`;
