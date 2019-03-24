import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state =expensesReducer(undefined,{ type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remone expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remone expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '65',
    description: 'PC',
    note:'',
    createdAt: 2500,
    amount: 265000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
const amount = 122000;

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount: amount
    }
  };
  const state = expensesReducer(expenses,action);
  expect(state[1].amount).toBe(amount);
});


test('should not edit an expense id id not found', () => {
  const amount = 122000;
  
    const action = {
      type: 'EDIT_EXPENSE',
      id: -1,
      updates: {
        amount: amount
      }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(state);
  });