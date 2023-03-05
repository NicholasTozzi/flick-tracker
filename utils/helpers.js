//Exporting the function for the dates
module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString(new Date(), 'MM/dd/yyyy');
    },
  today_date: (currentDate) => {
        //today's date
        return currentDate.toLocaleDateString();
    },
  addDay: (tomorrowDate) => {
    //adding number of days from today
      return tomorrowDate.toLocaleDateString(currentDate, 1);
    },
  isFuture: (futureDate) => {
    //future date from now
      return futureDate.toLocaleDateString(new Date(05, 04, 2023));
    },
  setDate: (setDate) => {
    //Set the day of the month to the given date.
      return setDate.toLocaleDateString(new Date(03, 06, 2023), {month: 12, date: 25, year: 2023});
    },
  parse_dates: (parseDates) => {
    // parsing the dates
      return parseDates.toLocaleDateString(currentDate, date, tomorrowDate, futureDate, setDate);
    }
  };
  

  