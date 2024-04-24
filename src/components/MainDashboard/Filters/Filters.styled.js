import styled from 'styled-components';

export const SWrapper_div = styled.div`
  width: 252px;
`;

export const STitle_h3 = styled.h3`
  position: relative;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.userProfile};

  margin-bottom: 28px;

  &::after {
    content: '';
    position: absolute;
    bottom: -14px;
    left: 0;
    width: 100%;
    outline: 1px solid ${({ theme }) => theme.filterOutline};
  }
`;

export const SLabelWrapper_div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const SLabelTitle_p = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.userProfile};
`;

export const SShowAll_p = styled.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${({ theme }) => theme.themeSwitsherPopUp};
  cursor: pointer;
`;

export const SForm_ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SItem_li = styled.li`
  display: flex;
  gap: 9px;
  align-items: center;
  text-transform: capitalize;

  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.filterPriority};

  cursor: pointer;

  &.active {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.userProfile};
  }
`;

export const Span = styled.span`
  opacity: 1;
  display: block;
  border-radius: 6px;
  width: 12px;
  height: 12px;
  outline: 1px solid ${({ $color }) => $color};
  background-color: ${({ $color }) => $color};
  &.active {
    border: 2px solid ${({ theme }) => theme.mainDashbordBackground};
  }
`;
