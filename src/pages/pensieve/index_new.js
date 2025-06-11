import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, Main } from '@styles';

const StyledMainContainer = styled(Main)`
  & > header {
    text-align: center;
    margin-bottom: 100px;
  }
`;

const PensievePage = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Pensieve | Patrick Nyangoto</title>
      <link rel="canonical" href="https://patrick-nyangoto.dev/pensieve" />
    </Helmet>

    <StyledMainContainer>
      <header>
        <h1 className="big-title">Pensieve</h1>
        <p className="subtitle">
          A collection of memories, thoughts, and learnings
        </p>
      </header>

      <div>
        <p>No posts available at the moment.</p>
      </div>
    </StyledMainContainer>
  </Layout>
);

export default PensievePage;
