import styled from 'styled-components';

export const SWrapper_div = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: auto;
  gap: 4px;
  align-items: center;
  justify-content: center;
  stroke: ${({ theme }) => theme.themeSwitcher};
  fill: ${({ theme }) => theme.panelBackground};
  color: ${({ theme }) => theme.themeSwitcher};
  cursor: pointer;
  &:hover,
  &focus {
    color: ${({ theme }) => theme.themeSwitsherAccent};
    stroke: ${({ theme }) => theme.themeSwitsherAccent};
  }
`;

export const STitle_p = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
