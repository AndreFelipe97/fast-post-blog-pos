import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar } from '../../Avatar';
import {
  Container,
  FieldContent,
  FormContent,
  Input,
  ProfileContainer,
  ProfileContent,
  PublicationButton,
  PublishContent,
  Textarea,
} from './styles';
import { api } from '../../../services/axios';
import { Post } from '../post';

interface PublishProps {
  name: string;
  email: string;
  imageUrl: string;
}

type UserType = {
  id: string;
  email: string;
  role: string;
};

interface FormData {
  title: string;
  post: string;
}

interface PublicationData {
  id: string;
  title: string;
  post: string;
}

export function Publish({ name, email, imageUrl }: PublishProps) {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [publications, setPublications] = useState<Array<PublicationData>>([]);
  const schema = yup.object().shape({
    title: yup.string().required(),
    post: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  async function getValues() {
    try {
      const response = (await api.get(`/users/${email}`)).data;
      const responsePublications = (await api.get(`/publications/${email}`)).data.publications;
      setUser(response.user);
      setPublications(responsePublications);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getValues();
  }, []);

  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    try {
      await api.post('/publication/', { ...data, userId: user.id });
      reset();
      getValues();
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <Container>
      <div>
        <ProfileContainer>
          <Avatar imageUrl={imageUrl} />
          <ProfileContent>
            <span>{name}</span>
            <p>{user.role ? user.role : 'Cadastre seu cargo'}</p>
          </ProfileContent>
        </ProfileContainer>
        <PublishContent>
          <FormContent onSubmit={onSubmit}>
            <FieldContent>
              <label htmlFor="title">Titulo</label>
              <Input type="text" id="title" {...register('title')} />
              <p>{errors.title?.message && 'Titulo é obrigatório'}</p>
            </FieldContent>
            <FieldContent>
              <label htmlFor="post">Publicações</label>
              <Textarea id="post" {...register('post')} />
              <p>{errors.post?.message && 'Publicação é obrigatório'}</p>
            </FieldContent>
            <PublicationButton>Publicar</PublicationButton>
          </FormContent>
        </PublishContent>
        {publications.map((publication) => (
          <Post
            key={String(publication.id)}
            id={publication.id}
            title={publication.title}
            post={publication.post}
          />
        ))}
      </div>
    </Container>
  );
}
