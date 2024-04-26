import styled from 'styled-components';

export const SWrapper_div = styled.div`
  position: relative;
  margin-left: auto;
  display: inline-flex;
`;
export const SWrapper_button = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  stroke: ${({ theme }) => theme.themeSwitcher};
  fill: ${({ theme }) => theme.panelBackground};
  color: ${({ theme }) => theme.themeSwitcher};
  cursor: pointer;
  outline: none;
  &:active {
    color: ${({ theme }) => theme.themeAccent};
    stroke: ${({ theme }) => theme.themeAccent};
  }

  @media only screen and (min-width: 1440px) {
    &:hover,
    &focus {
      color: ${({ theme }) => theme.themeAccent};
      stroke: ${({ theme }) => theme.themeAccent};
    }
  }
`;

export const STitle_p = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
