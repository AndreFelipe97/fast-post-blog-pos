import React from 'react';
import { FiEdit3 } from "react-icons/fi";
import { Container, EditButton, ProfileContent, UserName, UserRole } from './styles';
import { Avatar } from '../../Avatar';

export function Profile() {
  return (
    <Container>
      <Avatar imageUrl="https://avatars.githubusercontent.com/u/38105957?v=4" />
      <ProfileContent>
        <UserName>André Freitas</UserName>
        <UserRole>Desenvolvedor full stack</UserRole>
      </ProfileContent>
      <EditButton to="/edit-profile">
        <FiEdit3 /> Editar seu Perfil
      </EditButton>
    </Container>
  );
}