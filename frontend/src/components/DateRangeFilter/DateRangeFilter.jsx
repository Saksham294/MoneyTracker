import React, { useState } from 'react';
import { filterByDate } from '../../Actions/transactionActions';
import { useDispatch,useSelector } from 'react-redux';
import './DateRangeFilter.css'

function DateRangeFilter() {


    const {loading,transactionsPerDate}=useSelector(state=>state.filterByDate)
const dispatch=useDispatch()
  // State to store the start and end dates
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Function to handle changes to the start date input
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  }

  // Function to handle changes to the end date input
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  }

  // Function to handle submitting the date range filter
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterByDate(startDate,endDate))
    // Send the start and end dates to the server or perform other actions
    console.log("start date: ", startDate);
    console.log("end date: ", endDate);
  }

  return (
    <form onSubmit={handleSubmit} className='dateForm'>
      <label>
        Start Date:
        <input type="date" onChange={handleStartDateChange} />
      </label>
      <br />
      <label>
        End Date:
        <input type="date" onChange={handleEndDateChange} />
      </label>
      <br />
      <button type="submit">Apply Filter</button>
    </form>
  );
}

export default DateRangeFilter;