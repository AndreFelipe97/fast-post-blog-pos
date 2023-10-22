import React from 'react';
import { FiEdit3 } from "react-icons/fi";
import { Avatar, Container, EditButton, UserName, UserRole } from './styles';

export function Profile() {
  return (
    <Container>
      <Avatar>
        <img src="https://avatars.githubusercontent.com/u/38105957?v=4" alt="" />
      </Avatar>
      <UserName>André Freitas</UserName>
      <UserRole>Desenvolvedor full stack</UserRole>
      <EditButton>
        <FiEdit3 /> Editar seu Perfil
      </EditButton>
    </Container>
  );
}