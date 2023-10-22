import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/_layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        Profile
      </div>
      <div>
        Publish
      </div>
    </Layout>   
  );
}

export default IndexPage
