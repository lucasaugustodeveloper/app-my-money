import { combineReducers } from 'redux';

import dashboardReduce from '../dashboard/dashboardReduce';

const rootReducers = combineReducers({
  dashboard: dashboardReduce
});

export default rootReducers;
