import styled from 'styled-components';

export const SWrapper_div = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SNothingFoundP = styled.p`
  width: 355px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;

  text-align: center;
  color: ${({ theme }) => theme.mainDashbordText};

  @media only screen and (min-width: 768px) {
    width: 486px;

    font-size: 14px;
  }
`;

export const SAccentedLink = styled.a`
  color: ${({ theme }) => theme.themeAccent};
`;
