import { Link } from 'react-router-dom';
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

  a {
    display: block;
    font-weight: 500;
    text-align: center;
  }
`;

export const SbuttonsList_ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 0;

  & > li:first-child > a {
    border: 1px solid white;
  }

  & > li:first-child > a:hover {
    border-color: transparent;
  }
`;

export const SLinkButton = styled(Link)`
  width: 335px;
  text-align: center;
  padding: 14px 0;
  border-radius: 8px;

  color: black;
  background-color: transparent;

  transition:
    background-color 500ms ease-in-out,
    color 500ms ease-in-out,
    border-color 250ms ease-in-out;

  &:hover {
    background-color: rgb(22, 22, 22);
    color: white;
  }

  @media only screen and (min-width: 768px) {
    width: 344px;
  }
`;
