import React, { useState } from 'react';
import { Avatar } from '../../Avatar';
import { Container, FeedbackContent, ProfileContainer, ProfileContent, PublishContent } from './styles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebase';

export function Publish() {
  const [data, setData] = useState<string>('');
  const [user] = useAuthState(auth);

  return (
    <Container>
      <div>
        <ProfileContainer>
          <Avatar imageUrl={user?.photoURL} />
          <ProfileContent>
            <span>{user?.providerData[0].displayName}</span>
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