import styled from 'styled-components';

export const toggleButton_div = styled.div`
  position: relative;

  fill: transparent;
  stroke: rgba(255, 255, 255, 0.5); //?
`;

export const popupIcon_svg = styled.svg`
  cursor: pointer;

  transition: stroke 250ms ease-in-out;

  &:hover,
  &:focus {
    stroke: rgba(255, 255, 255, 1); //?
  }
`;

interface ISContainerProps {
  $isOpened: boolean;
}

export const container_div = styled.div<ISContainerProps>`
  position: absolute;
  top: 0px;
  z-index: 55;
  right: 50%;

  width: 135px;
  min-height: 86px;

  padding: 18px;

  display: flex;
  row-gap: 10px;
  flex-direction: column;

  background-color: #1f1f1f; //?

  border-radius: 8px;

  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  opacity: ${(props) => (props.$isOpened ? 1 : 0)};
  cursor: ${(props) => (props.$isOpened ? 'auto' : 'none')};

  transform: ${(props) =>
    props.$isOpened
      ? 'translate(50%, calc(-100% - 10px)) scale(1)'
      : 'translate(50%, calc(-100% - 10px)) scale(0)'};

  transition:
    opacity 250ms ease-in-out,
    transform 250ms ease-in-out;
`;

export const statusButton_button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 99px;

  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: white;
`;

interface IBellIcon {
  $color: string;
}

export const iconBell_svg = styled.svg<IBellIcon>`
  stroke: ${(props) => props.$color};
  position: absolute;
  top: 0;
  left: calc(-100% - 13px);
`;
