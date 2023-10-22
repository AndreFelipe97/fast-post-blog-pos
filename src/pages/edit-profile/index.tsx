import * as React from "react"
import type { PageProps } from "gatsby"
import { Layout } from "../../components/_layout";
import { BackButton, ButtonContent, Container, FieldContent, FormContent, ImageField, Input, SaveButton, TitleContent } from "./styles";

const EditProfilePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
        <TitleContent>
          <h1>Editar</h1>
        </TitleContent>
        <FormContent>
          <FieldContent>
            <label htmlFor="avatar">Seu Avatar</label>
            <ImageField type="file" id="avatar" name="avatar" />
          </FieldContent>
          <FieldContent>
            <label htmlFor="name">Nome</label>
            <Input type="text" id="name" name="name" />
          </FieldContent>
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
    </Layout>   
  );
}

export default EditProfilePage
