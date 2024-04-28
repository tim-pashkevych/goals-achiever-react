import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Icon } from '../Icon/Icon';
import flowerpot_1x from '../../assets/images/sidebar/flowerpot_1x.png';
import flowerpot_2x from '../../assets/images/sidebar/flowerpot_2x.png';

export const SDiv = styled.div`
  background-color: ${({ theme }) => theme.backgroundSidebar};
  padding: 14px 14px 24px;
  width: 225px;
  height: 100vh;

  &.sidebarHome {
    display: none;

    @media (min-width: 1440px) {
      display: flex;
      flex-direction: column;
      width: 260px;
    }
  }

  &.sidebarHeader {
    @media only screen and (min-width: 1439.99px) {
      display: none;
    }

    @media (min-width: 768px) {
      padding: 24px;
      width: 260px;
    }
  }
`;

export const SIcon = styled(Icon)`
  &.logo {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.logoBackground};
    fill: ${({ theme }) => theme.logoFill};
    padding: 6px 8px;
    margin-right: 8px;
  }

  &.plus {
    stroke: ${({ theme }) => theme.svgStroke};
    fill: none;
  }

  &.help-circle {
    stroke: ${({ theme }) => theme.textOne};
    fill: none;
    margin-right: 8px;
  }

  &.login {
    stroke: ${({ theme }) => theme.logoOut};
    fill: none;
    margin-right: 14px;
    transition: var(--transition);

    &:hover,
    &:focus {
      stroke: ${({ theme }) => theme.logoOutHover};
    }
  }
`;

export const SNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 70px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const Sp = styled.p`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.textOne};
`;

export const Sh2 = styled.h2`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textBord};
  margin-bottom: 8px;
`;

export const SDivProject = styled.div`
  height: 252px;
  margin-bottom: 4px;
  margin-inline: -14px;

  @media (min-width: 768px) {
    height: 416px;
    margin-inline: -24px;
  }

  @media (min-width: 1440px) {
    height: 161px;
    margin-inline: -13px;
  }
`;

export const SDivCreate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-block: 2px solid ${({ theme }) => theme.outline};
  margin-bottom: 40px;
  padding: 14px 0;
`;

export const SpCreate = styled.p`
  width: 76px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.5;
  color: ${({ theme }) => theme.textOne};
`;

export const SbuttonCreate = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.buttonBackground};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.secondaryColorHover};
  }
`;

export const SpHelp = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textOne};
  width: 168px;
  margin-bottom: 18px;

  span {
    color: ${({ theme }) => theme.secondaryColor};
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;

export const SDivNeed = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.helpBackground};
  background-image: url(${flowerpot_1x});
  background-position: top 14px left 14px;
  background-size: 54px 78px;
  background-repeat: no-repeat;

  border-radius: 8px;
  padding: 106px 14px 15px 15px;
  margin: auto 0 24px 0;
  width: 197px;
  height: 238px;

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi) {
    background-image: url(${flowerpot_2x});
  }

  @media (min-width: 768px) {
    width: 212px;
    height: 272px;

    padding: 112px 20px 20px 20px;
  }
`;

export const SpNeed = styled.p`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textOne};
`;

export const SbuttonNeed = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textOne};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.secondaryColorHover};
  }
`;

export const SDivLogOut = styled.div`
  display: flex;
  align-items: center;
`;

export const SbuttonLogout = styled.button`
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.textOne};
  padding-left: 10px;

  @media (min-width: 768px) {
    padding-left: 0;
  }
`;
