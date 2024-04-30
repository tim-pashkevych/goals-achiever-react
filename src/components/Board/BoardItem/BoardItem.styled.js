import styled, { css } from 'styled-components';
import { Icon } from '../..';

export const SIcon = styled(Icon)`
  &.project,
  &.puzzle-piece {
    stroke: ${({ theme }) => theme.textBord};
    fill: none;
    transition: var(--transition);
  }

  &.pencil,
  &.trash {
    stroke: ${({ theme }) => theme.textBord};
    fill: none;
    transition: var(--transition);

    &:hover,
    &:focus {
      stroke: ${({ theme }) => theme.textOne};
    }
  }
`;

export const SpProject = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textBord};
  padding: 20px 0;
`;

export const SDivButton = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const SbuttonProject = styled.button`
  color: ${({ theme }) => theme.textOne};

  &:hover .pencil,
  &:hover .trash {
    stroke: ${({ theme }) => theme.sideBarIcon_Hover};
  }
`;

export const SUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  padding: 0 18px 0 14px;
  position: relative;

  cursor: pointer;

  transition: background-color 250ms ease-in-out;

  p {
    transition: color 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.backgroundSidebar_Hover};

    p {
      color: ${({ theme }) => theme.textOne};
    }

    svg {
      stroke: ${({ theme }) => theme.textOne};
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${({ theme }) => theme.bgActive};

      &::after {
        content: '';
        border-radius: 4px 0 0 4px;
        width: 4px;
        height: 100%;
        background-color: ${({ theme }) => theme.logoOut};
        position: absolute;
        top: 0;
        right: -1px;
      }

      & p {
        color: ${({ theme }) => theme.textOne};
      }

      & .project,
      & .puzzle-piece {
        stroke: ${({ theme }) => theme.textOne};
      }
    `}

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
