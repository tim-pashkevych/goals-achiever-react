import styled from 'styled-components';

export const SWrapper_div = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  fill: ${({ theme }) => theme.userProfileIcon};
  stroke: ${({ theme }) => theme.userProfileIcon};
`;

export const STitle_p = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.userProfile};
  text-transform: capitalize;
`;

export const SImageWrapper_div = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.userProfileIconBackground};
`;
