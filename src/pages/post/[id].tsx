import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/_layout';
import { api } from '../../services/axios';
import { Container, Title, Content, Button } from '../../styles/pages/post/styles';
import { Spinner } from '../../components/spinner';

type PostProps = {
  publication: { title: string; post: string };
};

const PostPage: React.FC = () => {
  const [post, setPost] = useState<PostProps>({} as PostProps);

  async function getValues(id: string) {
    try {
      const response = (await api.get(`/publications/detail/${id}`)).data;
      setPost(response);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getValues(window.location.pathname.split('/')[2]);
  }, []);

  if (!post.publication) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <Title>{post.publication.title}</Title>
        <Content>{post.publication.post}</Content>
        <Button to="/">Voltar</Button>
      </Container>
    </Layout>
  );
};

export default PostPage;
