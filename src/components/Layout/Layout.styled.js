import styled from 'styled-components';

export const SLayout = styled.div`
  background: ${(props) =>
    props.$isLoggedIn
      ? props.theme.background
      : 'linear-gradient(180.00deg, rgba(196, 196, 196, 0) 25%,rgb(190, 219, 176) 92.187%);'};

  color: ${(props) => props.theme.text};
`;
