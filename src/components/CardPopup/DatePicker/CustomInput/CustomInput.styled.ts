import styled from 'styled-components';

interface ItoggleDatePickerProps {
  $degree: number;
}

export const toggleDatePicker_button = styled.button<ItoggleDatePickerProps>`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: #bedbb0;
  stroke: #bedbb0;
  background-color: transparent;

  display: flex;
  justify-content: start;
  column-gap: 4px;

  max-width: 100%;

  & > svg {
    transform: rotate(${(props) => props.$degree}deg);
    transition: transform 250ms ease-in-out;
  }
`;
