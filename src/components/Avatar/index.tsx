import React from 'react';
import { Avatar as AvatarStyled } from './styles';
import { FiUser } from 'react-icons/fi';
import { User } from '@firebase/auth';

interface AvatarProps {
  imageUrl?: string | null | undefined;
}

export function Avatar({ imageUrl }: AvatarProps) {
  return (
    <AvatarStyled>
      {
        imageUrl ? <img src={imageUrl} alt="" /> : <FiUser />
      }
    </AvatarStyled>
  );
}