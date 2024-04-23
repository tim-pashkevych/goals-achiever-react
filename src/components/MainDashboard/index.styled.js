import styled from 'styled-components';

export const SMainDashboard = styled.div`
  position: relative;
  max-width: 1180px;
  background-color: #1f1f1f;
  height: 100%;
`;

export const SAccentedLink = styled.a`
  color: #bedbb0;
`;

export const SNothingFoundP = styled.p`
  position: absolute;
  top: calc(50% - 30px);
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 486px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
`;
