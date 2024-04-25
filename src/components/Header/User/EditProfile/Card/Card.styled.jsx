import styled from 'styled-components';
export const SWrapper_div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  margin-bottom: 25px;
`;

export const SImageWrapper_div = styled.div`
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: end;
  border-radius: 8px;
  overflow: hidden;
  stroke: ${({ theme }) => theme.userProfileIcon};
  fill: ${({ theme }) => theme.userProfileIcon};
  background-color: ${({ theme }) => theme.mainDashbordBackground};
`;

export const SButtonWraper_div = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
`;
