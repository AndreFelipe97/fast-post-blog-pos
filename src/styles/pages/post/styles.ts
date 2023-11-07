import { Link } from '@reach/router';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  gap: 3rem;
`;

export const Title = styled.h1`
  color: #e1e1e6;
  font-weight: 700;
  font-size: 2.5rem;

  @media (max-width: 799px) {
    height: 1.8rem;
  }
`;

export const Content = styled.div`
  background-color: #202024;
  border-radius: 8px;
  padding: 3rem;
  text-align: justify;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  text-decoration: none;

  font-size: 1.6rem;
  color: #c4c4cc;
  font-weight: 700;

  text-decoration: none;

  &:hover {
    color: #00b37e;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
