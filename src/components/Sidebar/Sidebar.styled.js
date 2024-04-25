import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Icon } from '../Icon/Icon';
import flowerpot_1x from '../../assets/images/sidebar/flowerpot_1x.png';
import flowerpot_2x from '../../assets/images/sidebar/flowerpot_2x.png';

export const SDiv = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  padding: 14px 14px 24px;
  width: 225px;
  height: 100%;
`;

export const SIcon = styled(Icon)`
  &.logo {
    border-radius: 8px;
    background-color: #1f1f1f;
    fill: #fff;
    padding: 6px 8px;
    margin-right: 8px;
  }

  &.plus {
    stroke: #121212;
    fill: none;
  }

  &.help-circle {
    stroke: #fff;
    fill: none;
    margin-right: 8px;
  }

  &.login {
    stroke: #bedbb0;
    fill: none;
    margin-right: 14px;
  }

  &.project,
  &.puzzle-piece {
    stroke: #fff;
    fill: none;
  }

  &.pencil,
  &.trash {
    stroke: #fff;
    fill: none;
    opacity: 0.5;
  }
`;

export const SNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 70px;
`;

export const Sp = styled.p`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.04em;
  color: #fff;
`;

export const Sh2 = styled.h2`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
`;

export const SDivProject = styled.div`
  height: 220px;
  margin-bottom: 10px;
  margin-inline: -12px;
`;

export const SDivCreate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-block: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 40px;
  padding: 14px 0;
`;

export const SpCreate = styled.p`
  width: 76px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.5;
  color: #fff;
`;

export const SbuttonCreate = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background-color: #bedbb0;
`;

export const SpHelp = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: #fff;
  width: 168px;
  margin-bottom: 18px;
  span {
    color: #bedbb0;
  }
`;

export const SDivNeed = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #1f1f1f;
  background-image: url(${flowerpot_1x});
  background-position: top 14px left 14px;
  background-size: 54px 78px;
  background-repeat: no-repeat;

  border-radius: 8px;
  padding: 106px 14px 0;

  margin-bottom: 24px;
  width: 197px;
  height: 238px;

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi) {
    background-image: url(${flowerpot_2x});
  }
`;

export const SpNeed = styled.p`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const SbuttonNeed = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #fff;
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
  color: #fff;
  padding-left: 10px;
`;
