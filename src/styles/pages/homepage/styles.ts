import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  gap: 3rem;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 6.4rem;
  max-width: 32rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 4.8rem;
`;
export const ButtonLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  width: 21.2rem;
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
