import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 256px;
  height: 294px;
  background-color: #202024;
  border-radius: 8px;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202024;
  border: 2px solid #00B37E;
  padding: 6px;
  height: 60px;
  width: 60px;
  border-radius: 8px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;

export const UserName = styled.span`
  color: #E1E1E6;
  font-size: 16px;
  font-weight: 700;
  margin: 16px 0 5px;
`;

export const UserRole = styled.span`
  color: #8d8d99;
  font-size: 14px;
  margin-bottom: 24px;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  width: 192px;
  height: 50px;
  border: 1px solid #00B37E;
  border-radius: 8px;

  font-size: 16px;
  color: #00B37E;
  font-weight: 700;

  svg {
    color: #00B37E;
    height: 20px;
    width: 20px;
  }
`;
