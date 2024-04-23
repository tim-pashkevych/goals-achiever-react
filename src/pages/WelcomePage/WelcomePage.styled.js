import styled from 'styled-components';

export const SContainer = styled.div`
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 14px;

  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;

    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;

    @media only screen and (min-width: 768px) {
      font-size: 40px;
    }
  }

  p {
    width: 334px;
    text-align: center;
    margin-bottom: 34px;

    @media only screen and (min-width: 768px) {
      width: 473px;
      margin-bottom: 18px;
    }
  }

  ul > li:first-child {
    padding: 14px;
  }

  a {
    display: block;
    font-weight: 500;
    text-align: center;
  }
`;

export const SLinkButton = styled.a`
  width: 335px;
  color: white;
  text-align: center;
  padding: 14px 0;
  border-radius: 8px;

  background: rgb(22, 22, 22);

  @media only screen and (min-width: 768px) {
    width: 344px;
  }
`;
