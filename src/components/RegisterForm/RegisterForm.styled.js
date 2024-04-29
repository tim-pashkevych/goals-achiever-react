import styled from 'styled-components';
import { Icon } from '../Icon/Icon';

export const SRegister_form = styled.form`
  width: 100%;
  margin-top: 40px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div:not(:last-child) {
    margin-bottom: 14px;
  }

  & > div:last-of-type {
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 374.99px) {
    width: 90%;
  }
`;

export const SDiv_Input = styled.div`
  position: relative;
  width: 100%;
`;

export const SRegister_input = styled.input`
  outline: none;
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? '#f16b6b' : theme.secondaryColor)};
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  opacity: 0.4;
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const Sp_Error = styled.p`
  position: absolute;
  bottom: -8px;
  left: 9px;
  color: #f16b6b;
  background-color: #151515;
  text-align: left;
  font-size: 14px;
  padding: 0 8px;

  @media only screen and (max-width: 374.99px) {
    bottom: -6px;
    font-size: 9px;
    padding: 0 5px;
  }
`;

export const SDivPass = styled.div`
  position: relative;
  width: 100%;
`;

export const SIcon = styled(Icon)`
  &.icon {
    stroke: #6b6b6b;
    fill: none;
    position: absolute;
    top: 50%;
    right: 18px;
    transform: translateY(-50%);

    @media only screen and (max-width: 374.99px) {
      right: 10px;
    }
  }
`;
