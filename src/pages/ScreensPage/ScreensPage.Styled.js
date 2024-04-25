import styled from 'styled-components';

export const SMainDashboard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.mainDashbordBackground};
  height: 100vh;
  padding: 14px 8px 24px 20px;

  @media only screen and (min-width: 768px) {
    padding: 26px 18px 32px 32px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 10px 24px 8px 24px;
  }
`;

export const SFilterWrapper_button = styled.button`
  position: absolute;
  top: 14px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.themeSwitcher};

  stroke: ${({ theme }) => theme.themeSwitcher};
  fill: ${({ theme }) => theme.mainDashbordBackground};
  &:active {
    stroke: ${({ theme }) => theme.themeAccent};
    color: ${({ theme }) => theme.themeAccent};
  }
  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 32px;
  }
  @media only screen and (min-width: 1440px) {
    top: 14px;
    right: 24px;

    &:hover,
    &:focus {
      stroke: ${({ theme }) => theme.themeAccent};
      color: ${({ theme }) => theme.themeAccent};
    }
  }
`;

export const SFilter_p = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`;
