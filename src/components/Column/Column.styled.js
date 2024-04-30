import styled from 'styled-components';
export const SColumnWrapper = styled.div`
  width: 89vw;
  padding-bottom: 24px;
  @media only screen and (min-width: 375px) {
    width: 347px;
  }
  @media only screen and (min-width: 768px) {
    width: 351px;
    padding-bottom: 52px;
  }
  @media only screen and (min-width: 1440px) {
    padding-bottom: 16px;
  }
  display: flex;
  gap: 14px;
  flex-direction: column;
`;
export const SCardSuperWrapper = styled.div``;

export const SCardWrapperScroll = styled.div`
  width: 92.5vw;
  padding-bottom: 24px;
  @media only screen and (min-width: 375px) {
    width: 347px;
  }
  @media only screen and (min-width: 768px) {
    width: 351px;
    padding-bottom: 52px;
  }
  @media only screen and (min-width: 1440px) {
    padding-bottom: 16px;
  }
  display: flex;

  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  /* width: 100%; */

  gap: 8px;
  max-height: 100%;

  /* padding-right: 10px; */

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.scrollBackground};
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollBall};
    border-radius: 10px;
  }
`;
export const SColumnName = styled.div`
  width: 89vw;
  @media only screen and (min-width: 375px) {
    width: 335px;
  }
  @media only screen and (min-width: 768px) {
    width: 334px;
  }

  min-height: 56px;

  flex-basis: auto;

  padding: 0 20px;

  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.secondBackground};
  color: ${(props) => props.theme.columnName};
`;
export const SIconsWrapper = styled.div`
  display: flex;
  gap: 8px;

  :hover {
    fill: blue;
  }
`;

export const SButtonWrapper = styled.div`
  margin-top: ${({ $emptyList }) => ($emptyList ? '0px' : 'auto')};
  width: 89vw;
  @media only screen and (min-width: 375px) {
    width: 335px;
  }
  @media only screen and (min-width: 768px) {
    width: 334px;
  }

  flex-basis: auto;
`;

export const SIcon = styled.svg`
  stroke: ${(props) => props.theme.icon_Column};
  transition: var(--transition);
  &:hover {
    stroke: ${(props) => props.theme.icon_Column_Hover};
  }
`;
