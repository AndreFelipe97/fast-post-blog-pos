import React, { useState } from 'react';
import { Avatar } from '../../Avatar';
import { Container, FeedbackContent, ProfileContainer, ProfileContent, PublishContent } from './styles';

export function Publish() {
  const [data, setData] = useState<string>('');

  return (
    <Container>
      <div>
        <ProfileContainer>
          <Avatar imageUrl="https://avatars.githubusercontent.com/u/38105957?v=4" />
          <ProfileContent>
            <span>André Felipe</span>
            <p>Desenvolvedor full stack</p>
          </ProfileContent>
        </ProfileContainer>
        <PublishContent>
          <h1>Novo Projeto</h1>

          <p>
            Fala galeraa 👋. Acabei de subir mais um projeto no meu portifa. 
            É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do 
            projeto é DoctorCare 🚀.
          </p>
        </PublishContent>
        <FeedbackContent>
          <h1>Deixe seu feedback</h1>

          <textarea value={data} onChange={e => setData(e.target.value)} />

          <button disabled={data ? false : true}>Publicar</button>
        </FeedbackContent>
      </div>
    </Container>
  );
}