import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';

const PensievePage = ({ location }) => {
  return (
    <Layout location={location}>      <Helmet>
        <title>Blog | Patrick Nyangoto</title>
        <link rel="canonical" href="https://patorangin.me/pensieve" />
      </Helmet>
      
      <div style={{ padding: '100px 0', textAlign: 'center' }}>
        <h1>Blog Coming Soon</h1>
        <p>This section is under development.</p>
      </div>
    </Layout>
  );
};

export default PensievePage;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;