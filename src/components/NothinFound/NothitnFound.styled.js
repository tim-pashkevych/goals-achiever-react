import styled from 'styled-components';

export const SWrapper_div = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SNothingFoundP = styled.p`
  width: 486px;
  color: ${({ theme }) => theme.mainDashbordText};
  font-weight: 400;
  font-size: 14px;

  line-height: 1.3;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const SAccentedLink = styled.a`
  color: ${({ theme }) => theme.themeAccent};
`;
