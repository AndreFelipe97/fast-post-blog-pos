import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 83.2rem;
  height: auto;
  border-radius: 8px;
  background-color: #202024;
  padding: 4.7rem 4rem;

  @media (max-width: 1399px) {
    width: 100%;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  span {
    color: #e1e1e6;
    font-size: 1.6rem;
    font-weight: 700;
  }

  p {
    color: #8d8d99;
    font-size: 1.4rem;
  }
`;

export const PublishContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 0;
  border-bottom: 1px solid #323238;

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #e1e1e6;
  }

  p {
    font-size: 1.6rem;
    color: #c4c4cc;
    line-height: 1.6;
  }
`;

export const FeedbackContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.4rem 0 3.2rem;

  h1 {
    color: #e1e1e6;
    font-size: 1.6rem;
    font-weight: 700;
  }

  textarea {
    min-height: 9.6rem;
    max-width: 75.2rem;
    border-radius: 8px;
    background-color: #121214;
    padding: 1.3rem 1.6rem 0;
    color: #c4c4cc;
    border-color: #00875f;

    &:focus {
      outline: 0;
    }

    @media (max-width: 1399px) {
      max-width: 100%;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10.8rem;
    height: 4.9rem;
    background-color: #00875f;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 8px;
    border: none;

    &:disabled {
      background-color: #29292e;
      cursor: not-allowed;
    }
  }
`;
