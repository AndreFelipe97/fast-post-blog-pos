import { Link } from "gatsby";
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

export const EditButton = styled(Link)`
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

  text-decoration: none;

  svg {
    color: #00B37E;
    height: 20px;
    width: 20px;
  }
`;
