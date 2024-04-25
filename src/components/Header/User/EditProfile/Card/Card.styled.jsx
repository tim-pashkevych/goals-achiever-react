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
  & img {
    height: 100%;
    width: 100%;
  }
`;

export const SButtonWraper_div = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
`;

export const SHideInput_input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
