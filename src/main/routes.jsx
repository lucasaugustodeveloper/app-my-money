import React from 'react';
import { Router, Route, Redirect, hasHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (
  <Router history={hasHistory}>
    <Route path="/" exact component={Dashboard} />
    <Route path="/billingCycles" component={BillingCycle} />
    <Redirect from="*" to="/" />
  </Router>
);
