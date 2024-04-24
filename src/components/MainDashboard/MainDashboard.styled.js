import styled from 'styled-components';

export const SMainDashboard = styled.div`
  padding-left: 24px;
  padding-top: 10px;
  height: 100%;
`;

export const STitle_h3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.userProfile};

  margin-bottom: 10px;
`;

export const SButton_button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;
  width: 334px;
  height: 56px;
  background-color: ${({ theme }) => theme.mainDashbordButton};

  border: none;

  border-radius: 8px;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.userProfile};
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
