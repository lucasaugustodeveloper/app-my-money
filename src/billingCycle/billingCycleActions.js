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

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : '';
    api[method](`/billingCycles/${id}`, values)
      .then(res => {
        toastr.success('Sucess', 'Operação realiza com sucesso!');
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro', error));
      });
  };
}

export function create(values) {
  return submit(values, 'post');
}

export function update(values) {
  return submit(values, 'put');
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ];
}
