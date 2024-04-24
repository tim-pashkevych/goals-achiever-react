import styled from 'styled-components';

export const SMainDashboard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.mainDashbordBackground};
  height: calc(100vh - 68px);
  flex-basis: 100%;
`;

export const SFilterWrapper_div = styled.div`
  position: absolute;
  top: 14px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  stroke: ${({ theme }) => theme.themeSwitcher};
  fill: ${({ theme }) => theme.mainDashbordBackground};
`;

export const SFilter_p = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.themeSwitcher};
`;
