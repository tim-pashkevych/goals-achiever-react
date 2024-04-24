import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SLinkButton = styled(Link)`
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
