import styled from 'styled-components';

export const popupContainer_div = styled.div`
  /* background-color: #151515; //? */
  background-color: ${({ theme }) => theme.popup_Background};

  border-radius: 8px;
  /* border: 1px solid #bedbb080; //? */
  border: 1px solid ${({ theme }) => theme.popup_Border};

  padding: 24px;
`;

export const popupName_p = styled.p`
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  margin-bottom: 24px;

  /* color: #ffffff; //? */
  color: ${({ theme }) => theme.popupName_Text};
`;

export const cardDataForm_form = styled.form`
  width: 287px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

interface IFormFieldWrapperProps {
  $marginBottom: string;
}

export const formFieldWrapper_label = styled.label<IFormFieldWrapperProps>`
  position: relative;
  width: 100%;

  display: flex;

  margin-bottom: ${(props) => props.$marginBottom};
`;

export const title_input = styled.input`
  width: 100%;

  padding: 14px 18px;

  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  background-color: transparent;
  /* color: #ffffff; //? */
  color: ${({ theme }) => theme.textField_Text};

  border-radius: 8px;
  /* border: 1px solid rgba(190, 219, 176, 0.3); //? */
  border: 1px solid ${({ theme }) => theme.textField_Border};

  box-shadow: 0px 4px 16px 0px #16161614;

  transition:
    border-color 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover,
  &:focus {
    /* border-color: rgba(190, 219, 176, 1); //? */
    border-color: ${({ theme }) => theme.textField_Border_Hover};
    outline: none;
  }

  &::placeholder {
    /* color: rgba(255, 255, 255, 0.3); //? */
    color: ${({ theme }) => theme.textField_Placeholder};
  }
`;

export const description_textarea = styled.textarea`
  width: 100%;
  height: 154px;

  padding: 14px 18px;

  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  background-color: transparent;
  /* color: #ffffff; //? */
  color: ${({ theme }) => theme.textField_Text};

  resize: none;

  border-radius: 8px;
  /* border: 1px solid rgba(190, 219, 176, 0.3); //? */
  border: 1px solid ${({ theme }) => theme.textField_Border};

  box-shadow: 0px 4px 16px 0px #16161614;

  transition:
    border-color 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover,
  &:focus {
    /* border-color: rgba(190, 219, 176, 1); //? */
    border-color: ${({ theme }) => theme.textField_Border_Hover};
    outline: none;
  }

  &::placeholder {
    /* color: rgba(255, 255, 255, 0.3); //? */
    color: ${({ theme }) => theme.textField_Placeholder};
  }

  //scroll bar
  --sb-track-color: transparent;
  --sb-thumb-color: ${({ theme }) => theme.textArea_ScrollBar};
  --sb-size: 6px;

  &::-webkit-scrollbar {
    width: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 3px;
    cursor: pointer;
  }

  @supports not selector(::-webkit-scrollbar) {
    & {
      scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
    }
  }
`;

interface IPropertyNameLabelProps {
  $marginBottom: string;
}

export const propertyWrapper_div = styled.div<IPropertyNameLabelProps>`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  /* color: rgba(255, 255, 255, 0.5); //? */
  color: ${({ theme }) => theme.propertyWrapper_Text};

  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 4px;

  margin-bottom: ${(props) => props.$marginBottom};
`;

export const radioGroup_ul = styled.ul`
  display: flex;
  column-gap: 8px;

  height: 14px;
`;

interface ICustomRadioButtonProps {
  $color: string;
}

export const customRadioButton_span = styled.span<ICustomRadioButtonProps>`
  display: inline-block;

  width: 14px;
  height: 14px;

  border-radius: 50%;

  cursor: pointer;

  box-shadow: 0 0 0 1px ${(props) => props.$color};
  background-color: ${(props) => props.$color};
  border: 3px solid transparent;

  transition: border-color 250ms ease-in-out;

  input[type='radio']:checked + & {
    /* border-color: #151515; //? */
    border-color: ${({ theme }) => theme.popup_Background};
  }
`;

export const onSaveButton_button = styled.button`
  width: 100%;

  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;

  border-radius: 8px;

  /* background-color: #bedbb0; //? */
  background-color: ${({ theme }) => theme.onSaveButton_Background};
  /* color: #161616; //? */
  color: ${({ theme }) => theme.onSaveButton_Text};

  font-weight: 500;
  line-height: 1.5;

  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    /* background-color: #9dc888; //? */
    background-color: ${({ theme }) => theme.onSaveButton_Background_Hover};
  }
`;

export const plusIconContainer_span = styled.span`
  /* background-color: black; //? */
  background-color: ${({ theme }) => theme.plusIconContainer_Background};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  border-radius: 8px;

  /* stroke: white; //? */
  stroke: ${({ theme }) => theme.plusIconContainer_Stroke};
`;

interface IErrorMessageProps {
  $position: string;
}

export const errorMessage_p = styled.p<IErrorMessageProps>`
  color: red;
  position: absolute;
  ${(props) => `${props.$position};`}
  left: 0;
`;
