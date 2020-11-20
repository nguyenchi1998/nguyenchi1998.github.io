import React from 'react';
import { Switch } from 'react-router-dom';
import routes from './routes';
import BaseRoute from './BaseRoute';

const SwitchRoute = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <BaseRoute key={index} {...route} />
      ))}
    </Switch>
  );
};

export default SwitchRoute;
