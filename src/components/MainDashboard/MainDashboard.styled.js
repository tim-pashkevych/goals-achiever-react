import styled from 'styled-components';

export const STitle_h3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.userProfile};

  margin-bottom: 10px;
`;

export const SColumnWrapper = styled.div`
  @media only screen and (min-width: 320px) {
    min-width: 240px;
    width: calc(100%);
  }
  height: 95%;
  width: 335px;
  overflow-y: auto;
  display: flex;
  gap: 14px;
  @media only screen and (min-width: 768px) {
    width: 688px;
  }
  @media only screen and (min-width: 1440px) {
    width: 1108px;
    /* width: 100%; */
  }
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
