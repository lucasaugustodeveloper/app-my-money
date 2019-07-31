import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as toastReducer } from 'react-redux-toastr';

import dashboardReducer from '../dashboard/dashboardReduce';
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';

const rootReducers = combineReducers({
  dashboard: dashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: FormReducer,
  toastr: toastReducer
});

export default rootReducers;
