import React, { useEffect, useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Container, EditButton, ProfileContent, UserName, UserRole } from './styles';
import { Avatar } from '../../Avatar';
import { api } from '../../../services/axios';

interface ProfileProps {
  name: string;
  email: string;
  imageUrl: string;
}

type UserType = {
  id: string;
  email: string;
  role: string;
};

export function Profile({ name, email, imageUrl }: ProfileProps) {
  const [user, setUser] = useState<UserType>({} as UserType);

  async function getValues() {
    try {
      const response = (await api.get(`/users/${email}`)).data;
      setUser(response.user);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getValues();
  }, []);

  return (
    <Container>
      <Avatar imageUrl={imageUrl} />
      <ProfileContent>
        <UserName>{name}</UserName>
        <UserRole>{user.role ? user.role : 'Cadastre seu cargo'}</UserRole>
      </ProfileContent>
      <EditButton to={`/edit-profile/${user.id}`}>
        <FiEdit3 /> Editar seu Perfil
      </EditButton>
    </Container>
  );
}
