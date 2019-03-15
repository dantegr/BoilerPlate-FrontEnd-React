import React from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.filter.text}
    {props.expenses.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filter: state.filter
  };
};

export default connect(mapStateToProps)(ExpenseList);
