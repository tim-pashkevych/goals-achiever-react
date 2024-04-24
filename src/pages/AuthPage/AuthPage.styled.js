import styled from 'styled-components';

export const SContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SFormWrapper = styled.div`
  width: 335px;
  padding: 24px;
  border-radius: 8px;
  background: rgb(21, 21, 21);

  @media only screen and (min-width: 768px) {
    width: 424px;
    padding: 40px;
  }

  ul {
    display: flex;
    gap: 14px;
  }
  a {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.02em;

    color: rgba(255, 255, 255, 0.3);
  }
  a.active {
    color: rgb(255, 255, 255);
  }
`;
