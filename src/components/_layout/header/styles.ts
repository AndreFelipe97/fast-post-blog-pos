import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  height: 10rem;
  background-color: #202024;

  @media (max-width: 799px) {
    height: 7rem;

    img {
      width: 4.5rem;
      height: 4.1rem;
    }
  }
`;

export const Title = styled.h1`
  color: #e1e1e6;
  font-weight: 700;
  font-size: 2.5rem;

  @media (max-width: 799px) {
    height: 1.8rem;
  }
`;
