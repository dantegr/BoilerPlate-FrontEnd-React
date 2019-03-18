import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };

  render() {
    return (
      <div>
      <input type="text" value={this.props.filter.text} onChange={(e) => {
        this.props.dispatch(setTextFilter(e.target.value));
      }}/>
      <select
      value= {this.props.filter.sortBy} 
      onChange={(e) => {
        if (e.target.value === "date"){
          this.props.dispatch(sortByDate());
        } else if (e.target.value === "amount"){
          this.props.dispatch(sortByAmount());
        }
      }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={this.props.filter.startDate} // momentPropTypes.momentObj or null,
        //startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.props.filter.endDate} // momentPropTypes.momentObj or null,
        //endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>

    )


  }


}



const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);