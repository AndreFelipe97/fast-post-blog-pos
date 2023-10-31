import { Link } from 'gatsby';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  background-color: #323238;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 2rem 1.2rem;
  gap: 2rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 38.5rem;
  gap: 0.5rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  width: 15rem;
  height: 3rem;
  border: 1px solid #00b37e;
  border-radius: 8px;
  text-decoration: none;

  font-size: 1.6rem;
  color: #00b37e;
  font-weight: 700;

  text-decoration: none;

  svg {
    color: #00b37e;
    height: 2rem;
    width: 2rem;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
