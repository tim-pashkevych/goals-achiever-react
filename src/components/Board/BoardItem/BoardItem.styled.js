import styled from 'styled-components';
import { Icon } from '../..';

export const SLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1f1f1f;
  padding: 0 8px 0 14px;
`;

export const SDivLi = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
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

export const SpProject = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
  padding: 20px 0;
  margin-bottom: 116px;
`;

export const SDivButton = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const SbuttonProject = styled.button``;
