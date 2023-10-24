import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1399px) {
    width: 100%;
  }
`;

export const Spinner = styled.div`
  border: 8px solid rgba(141, 141, 153, 0.1);
  border-left-color: #00B37E;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;