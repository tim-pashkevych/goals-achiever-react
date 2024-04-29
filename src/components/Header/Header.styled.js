import styled from 'styled-components';

export const SHeader_header = styled.header`
  background-color: ${({ theme }) => theme.panelBackground};
  padding: 14px 20px;
  display: flex;
  gap: 14px;
  position: relative;

  @media only screen and (min-width: 768px) {
    padding: 18px 32px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 18px 24px;
  }
`;

export const SButton_button = styled.button`
  stroke: ${({ theme }) => theme.userProfile};
  & svg {
    width: 24px;
    height: 24px;
  }
  &:active {
    stroke: ${({ theme }) => theme.themeAccent};
  }

  @media only screen and (min-width: 768px) {
    & svg {
      width: 32px;
      height: 32px;
    }
  }

  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;
