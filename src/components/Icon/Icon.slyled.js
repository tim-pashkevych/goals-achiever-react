import styled from 'styled-components';

export const SIcon = styled.svg`
  stroke: ${(props) => (props.stroke ? props.stroke : props.color)};
  fill: ${(props) => (props.fill ? props.fill : props.color)};
`;
