import Ember from 'ember';
import moment from 'moment';
const { typeOf } = Ember;

export function hourFormat(params/*, hash*/) {
  let date = params;
  if (params && params.length > 0) {
    date = params[0];
  }
  if (typeOf(date) === "object") {
    return `${moment(date.min_date).format("HH:mm")} - ${moment(date.max_date).format("HH:mm")}`;
  } else {
    return date;
  }
}

export default Ember.Helper.helper(hourFormat);
