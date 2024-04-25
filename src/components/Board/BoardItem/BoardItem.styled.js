import styled from 'styled-components';
import { Icon } from '../..';

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

export const SpProject = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textOne};
  padding: 20px 0;
  margin-bottom: 116px;
`;

export const SDivButton = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const SbuttonProject = styled.button``;

export const SUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  // max-height: 252px;
  // overflow-y: scroll;

  // @media (min-width: 768px) {
  //   max-height: 416px;
  //   margin-inline: -24px;
  // }
`;

export const SLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.mainDashbordBackground};
  padding: 0 18px 0 14px;
  position: relative;

  &::after {
    content: '';
    border-radius: 4px 0 0 4px;
    width: 4px;
    height: 100%;
    background-color: ${({ theme }) => theme.secondaryColor};
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;

export const SDivLi = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;
