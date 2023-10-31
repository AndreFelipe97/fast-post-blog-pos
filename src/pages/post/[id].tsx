import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Layout } from '../../components/_layout';

const EditProfilePage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <Layout>{data.site.siteMetadata.title}</Layout>;
};

export default EditProfilePage;
