import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'asdas',
    description: 'January rent',
    note: 'This was the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filter : {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};