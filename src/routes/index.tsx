import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importing pages
import Landing from '../pages/Landing';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
