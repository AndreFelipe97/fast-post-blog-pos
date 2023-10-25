import * as React from 'react';
import type { PageProps } from 'gatsby';
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
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';
import { Spinner } from '../../components/spinner';
import { FiUser } from 'react-icons/fi';

const EditProfilePage: React.FC<PageProps> = () => {
  const [user, loading] = useAuthState(auth);

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
          <FormContent>
            <FieldContent>
              <label htmlFor="role">Função</label>
              <Input type="text" id="role" name="role" />
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
