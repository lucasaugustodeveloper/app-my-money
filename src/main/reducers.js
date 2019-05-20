import { combineReducers } from 'redux';

import dashboardReducer from '../dashboard/dashboardReduce';
import TabReducer from '../common/tab/tabReducer';

const rootReducers = combineReducers({
  dashboard: dashboardReducer,
  tab: TabReducer,
});

export default rootReducers;
