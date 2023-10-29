import React, { useEffect, useState } from 'react';
import { navigate, type PageProps } from 'gatsby';
import { FiUser } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Layout } from '../../components/_layout';
import {
  BackButton,
  ButtonContent,
  Container,
  DataContainer,
  FieldContent,
  FormContent,
  Input,
  SaveButton,
  TitleContent,
} from '../../styles/pages/edit-profile/styles';
import { auth } from '../../services/firebase';
import { Spinner } from '../../components/spinner';
import { api } from '../../services/axios';

type FormData = {
  role: string;
};

const EditProfilePage: React.FC<PageProps> = () => {
  const [user, loading] = useAuthState(auth);
  const [id, setId] = useState<string>('');

  const schema = yup.object().shape({
    role: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setId(window.location.pathname.split('/')[2]);
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (id !== 'undefined') {
        await api.put(`/users/${id}`, data);
      } else {
        await api.post(`/users`, {
          email: user?.email,
          role: data.role,
        });
      }
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <TitleContent>
            <h1>Editar</h1>
          </TitleContent>
          <DataContainer>
            {user?.photoURL ? <img src={user?.photoURL} alt="" /> : <FiUser />}
            <span>{user?.providerData[0].displayName}</span>
          </DataContainer>
          <FormContent onSubmit={onSubmit}>
            <FieldContent>
              <label htmlFor="role">Função</label>
              <Input type="text" id="role" {...register('role')} />
              <p>{errors.role?.message && 'Cargo é obrigatório'}</p>
            </FieldContent>
            <ButtonContent>
              <SaveButton>Salvar</SaveButton>
              <BackButton to="/">Voltar</BackButton>
            </ButtonContent>
          </FormContent>
        </Container>
      )}
    </Layout>
  );
};

export default EditProfilePage;
