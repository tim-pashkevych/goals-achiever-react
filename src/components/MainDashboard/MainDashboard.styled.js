import styled from 'styled-components';

export const STitle_h3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.userProfile};

  margin-bottom: 10px;
`;

export const SColumnWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px - 72px);
  overflow-y: auto;
  display: flex;
  gap: 14px;
  @media only screen and (min-width: 768px) {
    height: calc(100vh - 68px - 92px);
  }
  @media only screen and (min-width: 1440px) {
    height: calc(100vh - 68px - 52px);
  }

  &::-webkit-scrollbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    position: absolute;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.scrollBackground};
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    position: absolute;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.scrollBall};
    border-radius: 10px;
  }
`;

export const SButton_button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;
  min-width: 335px;
  height: 56px;
  background-color: ${({ theme }) => theme.mainDashbordButton};

  border: none;

  border-radius: 8px;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.userProfile};

  @media only screen and (min-width: 768px) {
    min-width: 334px;
  }
`;

export const SIconWrapper_div = styled.div`
  width: 28px;
  height: 28px;

  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.mainDashbordButtonIconBackground};

  stroke: ${({ theme }) => theme.mainDashbordButton};
  fill: ${({ theme }) => theme.mainDashbordButton};
`;
