import React, { ReactNode } from 'react';
import { GlobalStyle } from "../../styles/global";
import { Header } from './header';
import { Content } from './styles';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({children}: LayoutProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        {children}
      </Content>
    </>
  );
}