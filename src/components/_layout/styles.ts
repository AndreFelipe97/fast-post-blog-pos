import styled from "styled-components";

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.2rem;
  padding: 3.2rem 16rem 15rem;

  @media (max-width: 1399px) {
    flex-direction: column;
    gap: 1.6rem;
    padding: 1.6rem 8rem 7.5rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0.8rem;
    padding: 0.8rem 4rem 3.75rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.4rem 2rem 0.1875rem;
  }
`;