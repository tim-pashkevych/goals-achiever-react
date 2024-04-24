import styled from 'styled-components';

export const SContainer = styled.div`
  max-width: 350px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  background-color: #1f1f1f;
  padding: 24px;
  letter-spacing: -0.02em;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const STitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  margin: 0;
`;

export const SInput = styled.input`
  display: block;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  margin: 0;
  background-color: #1f1f1f;
  outline: none;
  border: 1px solid #bedbb069;
  padding: 14px 18px;
  border-radius: 8px;
  &:focus,
  &:active {
    border: 1px solid #bedbb0;
  }
`;

export const SImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161616;
  width: 28px;
  height: 28px;
  border-radius: 8px;
`;

export const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 50px;
  border-radius: 8px;
  background-color: #bedbb0;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #161616;
  border: none;

  &:active,
  &:hover,
  &:focus {
    background-color: #9dc888;
  }
`;
