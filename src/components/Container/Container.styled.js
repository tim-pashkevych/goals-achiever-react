import styled from 'styled-components';

export const SContainer = styled.div`
  min-width: 320px;
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    .container {
      max-width: 768px;
      padding: 0 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    .container {
      max-width: 1440px;
      padding: 0 100px;
    }
  }
`;