import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainLayout from 'containers/Layouts/Main';
import { isAuthenticated } from 'services/auth';

function BaseRoute({
  isPublic,
  pageTitle,
  noPageTitle,
  component: Component,
  layout: Layout = MainLayout,
  ...rest
}) {
  if (isPublic) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }
  const renderFunc = (props) =>
    isAuthenticated() ? (
      <Layout pageTitle={pageTitle} noPageTitle={noPageTitle}>
        <Component {...props} />
      </Layout>
    ) : (
      <Redirect
        to={{
          pathname: '/sign-in',
          state: { from: props.location }, // eslint-disable-line react/destructuring-assignment
        }}
      />
    );
  return <Route {...rest} render={renderFunc} />;
}

export default BaseRoute;
