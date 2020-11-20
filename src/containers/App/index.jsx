import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import SwitchRoute from 'router/SwitchRoute';
import GlobalStyle from 'styles/global-styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <>
    <CssBaseline />
    <BrowserRouter>
      <Helmet defaultTitle="Manager">
        <meta name="description" content="Manager" />
      </Helmet>
      <SwitchRoute />
      <GlobalStyle />
    </BrowserRouter>
  </>
);

export default App;
