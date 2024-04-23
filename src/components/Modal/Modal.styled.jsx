import styled from 'styled-components';

export const SWrapper_div = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(190, 219, 176, 0.089);
`;

export const SModalWindow_div = styled.div`
  position: relative;
  width: auto;
  height: auto;
  background-color: #161616;
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  padding: ${(props) => props.padding};
`;
export const SModalButton_button = styled.button`
  border-radius: 9px;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 4.5px;
  top: 14px;
  right: 14px;
  border: none;
  outline: none;
  stroke: #ffffff;

  &:hover,
  &:focus {
    outline: none;
    border: none;
    stroke: #9dc888;
  }
`;
