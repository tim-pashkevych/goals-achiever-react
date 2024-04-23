import styled from 'styled-components';

export const SList_ul = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;

  top: 25px;
  left: 0;
  width: 200px;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.themeSwitsherPopUpBorder};
  border-radius: 8px;
  width: 100px;

  box-shadow: 0 4px 16px 0 ${({ theme }) => theme.themeSwitsherPopUpBoxshadow};
  background: ${({ theme }) => theme.themeSwitsherPopUpBackground};
`;

export const SListItem_li = styled.li`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.themeSwitsherPopUp};
  cursor: pointer;
`;
