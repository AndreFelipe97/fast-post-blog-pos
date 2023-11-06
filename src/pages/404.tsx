import * as React from 'react';
import { Link, HeadFC, PageProps, useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../components/_layout';
import { Container, Paragraph, Title } from '../styles/pages/404/styles';

type NodePros = {
  id: string;
  frontmatter: {
    title: string;
    subtitle: string;
    label: string;
  };
};

const NotFoundPage: React.FC<PageProps> = () => {
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

  return (
    <Layout>
      <Container>
        {data.allMdx.nodes.map((node: NodePros) => {
          if (node.frontmatter.title === 'Página não encontrada') {
            return (
              <>
                <Title>{node.frontmatter.title}</Title>
                <Paragraph>{node.frontmatter.subtitle}</Paragraph>
                <Link to="/">{node.frontmatter.label}</Link>
              </>
            );
          }
        })}
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
