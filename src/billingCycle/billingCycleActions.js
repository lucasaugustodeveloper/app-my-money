import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

import api from '../services/api';

const INITIAL_VALUES = [];

export function getList() {
  const request = api.get('/billingCycles');

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  };
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ];
}

export function create(values) {
  return dispatch => {
    api
      .post('/billingCycles', values)
      .then(res => {
        toastr.success('Sucess', 'Operação realiza com sucesso!');
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro', error));
      });
  };
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ];
}
