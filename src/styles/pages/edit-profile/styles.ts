import { Link } from "gatsby";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  width: 832px;
  background-color: #202024;
  border-radius: 8px;
  padding: 40px;
  gap: 10px;
`;

export const TitleContent = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #323238;
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FieldContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    color: #e1e1e6;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const ImageField = styled.input`
  &[type=file]::file-selector-button {
    background-color: #00875F;
    color: #FFFFFF;
    border: none;
    min-height: 40px;
    border-radius: 8px;
  }
`;

export const Input = styled.input`
  min-height: 40px;
  max-width: 752px;
  border-radius: 8px;
  background-color: #121214;
  color: #c4c4cc;
  padding-left: 10px;
  border-color: #00875F;

  &:focus {
    outline: 0;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 49px;
  color: #FFFFFF;
  background-color: #00875F;
  border-radius: 8px;
  border: none;
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 49px;
  color: #FFFFFF;
  background-color: #29292E;
  border-radius: 8px;
  border: none;
  text-decoration: none;
`;
