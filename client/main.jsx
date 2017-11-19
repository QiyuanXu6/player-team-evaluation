import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from '../imports/ui/App.jsx';
import New from '../imports/ui/New';
import Lost from '../imports/ui/Lost';

injectTapEventPlugin();

const history = createBrowserHistory();
Meteor.startup(() => {
  render((
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/New" component={New} />
        <Route path="*" component={Lost} />
      </Switch>
    </Router>
  ), document.getElementById('render-target'));
})
