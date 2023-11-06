import React from 'react';
import { useStaticQuery, type PageProps, graphql } from 'gatsby';
import { FaGoogle } from 'react-icons/fa6';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle } from '../services/firebase';
import { Layout } from '../components/_layout';
import { Profile } from '../components/cards/profile';
import { Publish } from '../components/cards/publish';
import { ButtonLogin, Container, Paragraph, Title } from '../styles/pages/homepage/styles';
import { Spinner } from '../components/spinner';

type NodePros = {
  id: string;
  frontmatter: {
    title: string;
    subtitle: string;
    label: string;
  };
};

const IndexPage: React.FC<PageProps> = () => {
  const [user, loading, error] = useAuthState(auth);

  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            subtitle
            label
          }
        }
      }
    }
  `);

  if (loading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container>{error.message}</Container>
      </Layout>
    );
  }

  return (
    <Layout>
      {user ? (
        <>
          <Profile
            name={String(user?.displayName)}
            email={String(user?.email)}
            imageUrl={String(user?.photoURL)}
          />
          <Publish
            name={String(user?.displayName)}
            email={String(user?.email)}
            imageUrl={String(user?.photoURL)}
          />
        </>
      ) : (
        <Container>
          {data.allMdx.nodes.map((node: NodePros) => {
            if (node.frontmatter.title === 'Login') {
              return (
                <>
                  <Title>{node.frontmatter.title}</Title>
                  <Paragraph>{node.frontmatter.subtitle}</Paragraph>
                  <ButtonLogin onClick={signInWithGoogle}>
                    <FaGoogle /> {node.frontmatter.label}
                  </ButtonLogin>
                </>
              );
            }
          })}
        </Container>
      )}
    </Layout>
  );
};

export default IndexPage;
