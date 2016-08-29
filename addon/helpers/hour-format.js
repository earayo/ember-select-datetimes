import Ember from 'ember';
import moment from 'moment';

export function hourFormat(params/*, hash*/) {
  let date = params;
  if (params && params.length > 0) {
    date = params[0];
  }
  return moment(date).format("HH:mm");
}

export default Ember.Helper.helper(hourFormat);
