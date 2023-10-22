import React from 'react';
import { Container, Title } from "./styles";
import { icon } from '../../../assets';

export function Header() {
  return (
    <Container>
      <img src={icon} />
      <Title>Fast Feed </Title>
    </Container>
  )
}