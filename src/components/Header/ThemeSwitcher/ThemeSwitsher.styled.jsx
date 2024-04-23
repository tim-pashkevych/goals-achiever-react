import styled from 'styled-components';

export const SWrapper_div = styled.div`
  position: relative;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  stroke: ${({ theme }) => theme.themeSwitcher};
  fill: ${({ theme }) => theme.panelBackground};
`;

export const STitle_p = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.themeSwitcher};

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
