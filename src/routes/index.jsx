import React from 'react';
import {
  Route,
  Router,
  Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Text from '../containers/Text';

const history = createHistory();

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Text} />
      </Switch>
    </Router>
  );
}

export default Routes;
