import styled from 'styled-components';
export const SColumnWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-sizing: border-box;
`;

export const SCardWrapper = styled.div`
  height: 478px;
  overflow: hidden;
  @media (min-width: 768px) and (max-width: 1439px) {
    height: 640px;
  }
`;
export const SCardWrapperScroll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px;

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
  width: 335px;
  height: 56px;

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
  width: 335px;
`;

export const SIcon = styled.svg`
  stroke: ${(props) => props.theme.icon_Column};
  transition: var(--transition);
  &:hover {
    stroke: ${(props) => props.theme.icon_Column_Hover};
  }
`;
