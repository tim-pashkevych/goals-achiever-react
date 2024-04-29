import styled from 'styled-components';

export const SDiv = styled.div`
  padding: 24px;
`;

export const Sp = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.columnName};
  margin-bottom: 40px;
  max-width: 290px;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 374.99px) {
    font-size: 12px;
  }
`;

export const SDiv_Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SButton = styled.button`
  border-radius: 8px;
  width: 105px;
  height: 49px;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.buttonTextColor};
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.secondaryColorHover};
  }

  @media (min-width: 768px) {
    width: 138px;
    font-size: 14px;
  }

  @media (max-width: 374.99px) {
    width: 85px;
    height: 40px;
  }
`;
