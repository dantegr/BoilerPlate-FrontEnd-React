import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState =[];


const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }

};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }

};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  }));

console.log(store.getState());


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