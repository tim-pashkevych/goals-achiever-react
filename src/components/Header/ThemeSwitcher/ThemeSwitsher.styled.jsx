import styled from 'styled-components';

export const SWrapper_div = styled.div`
  position: relative;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 2.5px 0;
  stroke: ${({ theme }) => theme.themeSwitcher};
  fill: ${({ theme }) => theme.panelBackground};
`;

export const STitle_div = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.themeSwitcher};

  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
