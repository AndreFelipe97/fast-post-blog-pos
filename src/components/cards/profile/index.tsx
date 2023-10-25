import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Container, EditButton, ProfileContent, UserName, UserRole } from './styles';
import { Avatar } from '../../Avatar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebase';

export function Profile() {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Avatar imageUrl={user?.photoURL} />
      <ProfileContent>
        <UserName>{user?.providerData[0].displayName}</UserName>
        <UserRole>Desenvolvedor full stack</UserRole>
      </ProfileContent>
      <EditButton to="/edit-profile">
        <FiEdit3 /> Editar seu Perfil
      </EditButton>
    </Container>
  );
}
