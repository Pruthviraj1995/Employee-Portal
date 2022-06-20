/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import EmployeeDashboard from 'containers/EmployeeDashboard/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 1rem;
  flex-direction: column;
  margin-top: 2rem;
`;

export default function App() {
  return (
    <div>
      <Header />
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Employee Portal"
          defaultTitle="Employee Portal"
        >
          <meta name="description" content="Employee Portal" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={EmployeeDashboard} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
        <GlobalStyle />
      </AppWrapper>
    </div>
  );
}
