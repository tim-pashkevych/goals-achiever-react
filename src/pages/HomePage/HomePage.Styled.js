import styled from 'styled-components';

export const SMainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const Sdiv = styled.div`
  @media screen and (max-width: 1440px) {
    display: none;
  }
`;
