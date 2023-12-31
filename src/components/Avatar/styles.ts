import styled from 'styled-components';

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202024;
  border: 2px solid #00b37e;
  padding: 0.6rem;
  height: 6rem;
  width: 6rem;
  border-radius: 0.8rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 5px;
  }

  svg {
    color: #8d8d99;
  }
`;
