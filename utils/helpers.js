import { format, parseJSON, addDays, isFuture  } from 'date-fns'

//Now
import format from 'date-fns/format'

const flickTrackerApp = () => {

  const date = format(new Date(), 'MM/dd/yyyy');
  const tomorrow =  addDays (date, 1);
  const inTheFuture = isFuture(new Date());
  const parse = parseJSON(date);
}

export default flickTrackerApp;


// module.exports = {
//   format_date: (date) => {
    
//     // Format date as MM/DD/YYYY
//       const date = new Date();
//       return date.toLocaleDateString();
//     },
//     future_date: (futureDate) => {
//       //future date from now
//       const futureDate = isFuture(new Date(3, 2, 2023), 30);    
//       return futureDate.toLocaleDateString();
//     },
//     set_date: (setDate) => {
//       //Set the day of the month to the given date.
//       const date = setDate(new Date(2023, 3, 2), 30);
//       return setDate.toLocaleDateString();
//     }
//   };
  

  