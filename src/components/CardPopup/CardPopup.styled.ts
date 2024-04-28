import styled from 'styled-components';

export const popupName_p = styled.p`
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  margin-bottom: 24px;

  color: #ffffff; //?
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
  color: #ffffff; //?

  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.3); //?

  box-shadow: 0px 4px 16px 0px #16161614;

  transition:
    border-color 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover,
  &:focus {
    border-color: rgba(190, 219, 176, 1); //?
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
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
  color: #ffffff; //?

  resize: none;

  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.3); //?

  box-shadow: 0px 4px 16px 0px #16161614;

  transition:
    border-color 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover,
  &:focus {
    border-color: rgba(190, 219, 176, 1); //?
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  //scroll bar
  --sb-track-color: transparent;
  --sb-thumb-color: #bedbb0;
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

  color: rgba(255, 255, 255, 0.5); //?

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

  /* border: 1px solid ${(props) => props.$color}; */
  /* position: relative; */
  /* &::before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 14px;
    height: 14px;

    border-radius: 50%;

    background-color: ${(props) => props.$color};

    transition:
      width 250ms ease-in-out,
      height 250ms ease-in-out;
  } */

  /* input[type='radio']:checked + &::before {
    width: 8px;
    height: 8px;
  } */

  box-shadow: 0 0 0 1px ${(props) => props.$color};
  background-color: ${(props) => props.$color};
  border: 3px solid transparent;
  transition: border-color 250ms ease-in-out;

  input[type='radio']:checked + & {
    border-color: #151515;
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

  background-color: #bedbb0;

  font-weight: 500;
  line-height: 1.5;

  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #9dc888;
  }
`;

export const plusIconContainer_span = styled.span`
  background-color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  border-radius: 8px;

  stroke: white;
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
