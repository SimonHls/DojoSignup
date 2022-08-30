//Stores all functions used in the calendar (date picker)
import Moment from 'moment';

export function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1);
}

export function getDaysInMonth(year, month) {
  return new Date(year, month  + 1, 0).getDate(); //no idea why +1 is necessary
}

export function displayAsMonth(date) {
  return Moment(date).format('MMM YYYY')
}
