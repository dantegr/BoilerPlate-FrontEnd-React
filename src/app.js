import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense}  from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch (addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch (addExpense({ description: 'Gas Bill'}));
store.dispatch (addExpense({ description: 'Rent', amount: 120000 }));

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'))
// }, 3000);




  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
  console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));