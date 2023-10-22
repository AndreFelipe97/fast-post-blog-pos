import React from 'react';
import { Avatar as AvatarStyled } from './styles';

interface AvatarProps {
  imageUrl: string;
}

export function Avatar({ imageUrl }: AvatarProps) {
  return (
    <AvatarStyled>
      <img src={imageUrl} alt="" />
    </AvatarStyled>
  );
}