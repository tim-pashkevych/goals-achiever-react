import styled from 'styled-components';

export const SList_ul = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;

  top: 100%;
  right: -15%;
  width: 100px;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.themeSwitsherPopUpBorder};
  border-radius: 8px;
  width: 100px;
  cursor: default;
  box-shadow: 0 4px 16px 0 ${({ theme }) => theme.themeSwitsherPopUpBoxshadow};
  background: ${({ theme }) => theme.themeSwitsherPopUpBackground};

  z-index: 999;
`;

export const SListItem_li = styled.li`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  width: 100%;

  color: ${({ theme }) => theme.themeSwitsherPopUp};
  transition: var(--transition);
  &:active {
    color: ${({ theme }) => theme.themeAccent};
  }
  @media screen and (min-width: 1440px) {
    &:hover,
    &focus {
      color: ${({ theme }) => theme.themeAccent};
    }
  }
`;

export const SButton_button = styled.button`
  width: 100%;
  text-align: start;
  transition: var(--transition);
  @media screen and (min-width: 1440px) {
    &:hover,
    &focus {
      color: ${({ theme }) => theme.themeAccent};
    }
  }
`;
