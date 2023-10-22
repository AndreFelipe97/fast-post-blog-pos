import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/_layout";
import { Profile } from "../components/cards/profile";
import { Publish } from "../components/cards/publish";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Profile />
      <Publish />
    </Layout>   
  );
}

export default IndexPage
