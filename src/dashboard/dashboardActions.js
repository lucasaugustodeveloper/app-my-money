import summary from '../services/api';

export function getSummary() {
  const request = summary.get('/billingCycles/summary');

  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request
  };
}
