import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 832px;
  height: auto;
  border-radius: 8px;
  background-color: #202024;
  padding: 47px 40px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  span {
    color: #e1e1e6;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    color: #8d8d99;
    font-size: 14px;
  }
`;

export const PublishContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  border-bottom: 1px solid #323238;

  h1 {
    font-size: 18px;
    font-weight: 700;
    color: #e1e1e6;
  }

  p {
    font-size: 16px;
    color: #c4c4cc;
    line-height: 1.6;
  }
`;

export const FeedbackContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0 32px;

  h1 {
    color: #e1e1e6;
    font-size: 16px;
    font-weight: 700;
  }

  textarea {
    min-height: 96px;
    max-width: 752px;
    border-radius: 8px;
    background-color: #121214;
    padding: 13px 16px 0;
    color: #c4c4cc;
    border-color: #00875F;

    &:focus {
      outline: 0;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 108px;
    height: 49px;
    background-color: #00875F;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    border-radius: 8px;
    border: none;

    &:disabled {
      background-color: #29292E;
      cursor: not-allowed;
    }
  }
`;
