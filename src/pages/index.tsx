import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/_layout";
import { Profile } from "../components/cards/profile";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Profile />
      <div>
        Publish
      </div>
    </Layout>   
  );
}

export default IndexPage
