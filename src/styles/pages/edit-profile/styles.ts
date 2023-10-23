import { Link } from "gatsby";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  width: 83.2rem;
  background-color: #202024;
  border-radius: 8px;
  padding: 4rem;
  gap: 1rem;

  @media (max-width: 1399px) {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  height: 6rem;
  width: 100%;
  border-bottom: 1px solid #323238;
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FieldContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: #e1e1e6;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const ImageField = styled.input`
  &[type=file]::file-selector-button {
    background-color: #00875F;
    color: #FFFFFF;
    border: none;
    min-height: 4rem;
    border-radius: 8px;
  }
`;

export const Input = styled.input`
  min-height: 4rem;
  max-width: 75.2rem;
  border-radius: 8px;
  background-color: #121214;
  color: #c4c4cc;
  padding-left: 1rem;
  border-color: #00875F;

  &:focus {
    outline: 0;
  }

  @media (max-width: 1399px) {
    max-width: 100%;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 799px) {
    max-width: 100%;
    flex-direction: column;
  }
`;

export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10.8rem;
  height: 4.9rem;
  color: #FFFFFF;
  background-color: #00875F;
  border-radius: 8px;
  border: none;

  @media (max-width: 799px) {
    width: 100%;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10.8rem;
  height: 4.9rem;
  color: #FFFFFF;
  background-color: #29292E;
  border-radius: 8px;
  border: none;
  text-decoration: none;

  @media (max-width: 799px) {
    width: 100%;
  }
`;
