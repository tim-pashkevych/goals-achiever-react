import styled from 'styled-components';

export const SWrapper_button = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  fill: ${({ theme }) => theme.userProfileIcon};
  stroke: ${({ theme }) => theme.userProfileIcon};
  color: ${({ theme }) => theme.userProfile};

  transition: var(--transition);
  &:active {
    fill: ${({ theme }) => theme.themeAccent};
    stroke: ${({ theme }) => theme.themeAccent};
    color: ${({ theme }) => theme.themeAccent};
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      fill: ${({ theme }) => theme.themeAccent};
      stroke: ${({ theme }) => theme.themeAccent};
      color: ${({ theme }) => theme.themeAccent};
    }
  }
`;

export const STitle_p = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
`;

export const SImageWrapper_div = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.userProfileIconBackground};
`;
