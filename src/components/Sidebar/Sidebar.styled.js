import styled from 'styled-components';
import { Icon } from '../Icon/Icon';

export const SDiv = styled.div``;

export const SIcon = styled(Icon)`
  &.logo {
    fill: red;
    position: absolute;
    top: 0;
    left: 0;
  }

  &.plus {
    fill: #fff;
    stroke: black;
  }
`;
