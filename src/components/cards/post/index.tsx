import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Button, Container, Content } from './styles';
interface PostProps {
  id: string;
  title: string;
  post: string;
}

export function Post({ id, title, post }: PostProps) {
  return (
    <Container>
      <Content>
        <h3>{title}</h3>
        <div>
          <p>{post.slice(0, 100)}...</p>
        </div>
      </Content>
      <Button to={`/post/${id}`}>
        <FiSearch /> Visualizar
      </Button>
    </Container>
  );
}
