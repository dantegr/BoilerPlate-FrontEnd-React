import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup defaut filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const curentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE'};
  const state = filtersReducer(curentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER'});
  expect(state).toEqual({
    text: state.text,
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set startDate filter', () => {
  const state = filtersReducer(undefined, {type: 'SET_START_DATE'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: state.startDate,
    endDate: moment().endOf('month')
  });
});

test('should set endDate filter', () => {
  const state = filtersReducer(undefined, {type: 'SET_END_DATE'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: state.endDate
    });
});