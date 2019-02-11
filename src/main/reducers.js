import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  dashboard: () => ({ summary: { credit: 100, debts: 50 } })
});

export default rootReducers;
