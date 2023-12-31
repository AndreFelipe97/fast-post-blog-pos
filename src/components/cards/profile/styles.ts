import { Link } from 'gatsby';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25.6rem;
  height: 29.4rem;
  background-color: #202024;
  border-radius: 8px;

  @media (max-width: 1399px) {
    flex-direction: row;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 4rem;
  }

  @media (max-width: 520px) {
    padding-bottom: 1rem;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: flex-start;
  }
`;

export const UserName = styled.span`
  color: #e1e1e6;
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 1.6rem;
`;

export const UserRole = styled.span`
  color: #8d8d99;
  font-size: 1.4rem;
  margin-bottom: 2.4rem;
`;

export const EditButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  width: 19.2rem;
  height: 5rem;
  border: 1px solid #00b37e;
  border-radius: 8px;

  font-size: 1.6rem;
  color: #00b37e;
  font-weight: 700;

  text-decoration: none;

  svg {
    color: #00b37e;
    height: 2rem;
    width: 2rem;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;
