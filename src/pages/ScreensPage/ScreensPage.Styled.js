import styled from 'styled-components';

export const SMainDashboard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.mainDashbordBackground};
  height: calc(100vh - 68px);
  padding: 14px 0px 0px 20px;

  background-image: ${(props) =>
    props.$bgMobile1x ? `url("${props.$bgMobile1x}")` : 'none'};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${(props) =>
      props.$bgMobile2x ? `url("${props.$bgMobile2x}")` : 'none'};
  }

  @media only screen and (min-width: 768px) {
    padding: 26px 0px 0px 32px;

    background-image: ${(props) =>
      props.$bgTablet1x ? `url("${props.$bgTablet1x}")` : 'none'};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${(props) =>
        props.$bgTablet2x ? `url("${props.$bgTablet2x}")` : 'none'};
    }
  }
  @media only screen and (min-width: 1440px) {
    padding: 10px 0px 0px 24px;

    background-image: ${(props) =>
      props.$bgDesktop1x ? `url("${props.$bgDesktop1x}")` : 'none'};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${(props) =>
        props.$bgDesktop2x ? `url("${props.$bgDesktop2x}")` : 'none'};
    }
  }

  @media (max-width: 374.99px) {
    background-image: ${(props) =>
      props.$bgMobile1x ? `url("${props.$bgMobile1x}")` : 'none'};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${(props) =>
        props.$bgMobile1x ? `url("${props.$bgMobile2x}")` : 'none'};
    }
  }

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
