import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import styled from 'styled-components';
import { Main } from '@styles';

const StyledMainContainer = styled(Main)`
  max-width: 1000px;

  header {
    margin-bottom: 100px;
    text-align: center;
  }
`;

const TagsPage = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Tags | Patrick Nyangoto</title>
      <link rel="canonical" href="https://patrick-nyangoto.dev/pensieve/tags" />
    </Helmet>

    <StyledMainContainer>
      <header>
        <h1 className="big-title">Tags</h1>
        <p className="subtitle">No tags available at the moment.</p>
      </header>
    </StyledMainContainer>
  </Layout>
);

export default TagsPage;
