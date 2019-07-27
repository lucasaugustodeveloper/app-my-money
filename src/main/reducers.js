import { combineReducers } from 'redux';

import dashboardReducer from '../dashboard/dashboardReduce';
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';

const rootReducers = combineReducers({
  dashboard: dashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer
});

export default rootReducers;
