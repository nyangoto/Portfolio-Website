import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';

const TagsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet>
        <title>Tags | Patrick Nyangoto</title>
        <link rel="canonical" href="https://patrick-nyangoto.dev/pensieve/tags" />
      </Helmet>
      
      <div style={{ padding: '100px 0', textAlign: 'center' }}>
        <h1>Tags Coming Soon</h1>
        <p>This section is under development.</p>
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;