import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { FaGoogle } from "react-icons/fa6";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../services/firebase";
import { Layout } from "../components/_layout";
import { Profile } from "../components/cards/profile";
import { Publish } from "../components/cards/publish";
import { ButtonLogin, Container, Paragraph, Title } from "../styles/pages/homepage/styles";

const IndexPage: React.FC<PageProps> = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Layout>
      {
        user ? (
          <>
            <Profile />
            <Publish />
          </>
        ):(
          <Container>
            <Title>Login</Title>
            <Paragraph>
              Desculpa 😔, Para poder ver ou realizar alguma publicação é necessário realizar login.
            </Paragraph>
            <ButtonLogin onClick={signInWithGoogle}>
              <FaGoogle /> Login com o Google
            </ButtonLogin>
          </Container>
        )
      }
    </Layout>   
  );
}

export default IndexPage
