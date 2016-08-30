import Ember from 'ember';
export default Ember.Controller.extend({
  range: null,
  range2: null,
  dates: [
    {
      title: "2016/08/25",
      intervals: [
        {min_date: "2016/08/25 15:00", max_date: "2016/08/25 16:00"},
        {min_date: "2016/08/25 16:00", max_date: "2016/08/25 17:00"},
        {min_date: "2016/08/25 17:00", max_date: "2016/08/25 18:00"},
        {min_date: "2016/08/25 18:00", max_date: "2016/08/25 19:00"},
        {min_date: "2016/08/25 19:00", max_date: "2016/08/25 20:00"},
      ]
    },
    {
      title: "2016/08/26",
      intervals: [
        {min_date: "2016/08/26 09:00", max_date: "2016/08/26 10:00"},
        {min_date: "2016/08/26 10:00", max_date: "2016/08/26 11:00"},
        {min_date: "2016/08/26 11:00", max_date: "2016/08/26 12:00"},
        {min_date: "2016/08/26 12:00", max_date: "2016/08/26 13:00"},
        {min_date: "2016/08/26 13:00", max_date: "2016/08/26 14:00"},
        {min_date: "2016/08/26 14:00", max_date: "2016/08/26 15:00"},
        {min_date: "2016/08/26 15:00", max_date: "2016/08/26 16:00"},
        {min_date: "2016/08/26 16:00", max_date: "2016/08/26 17:00"},
        {min_date: "2016/08/26 17:00", max_date: "2016/08/26 18:00"},
        {min_date: "2016/08/26 18:00", max_date: "2016/08/26 19:00"},
        {min_date: "2016/08/26 19:00", max_date: "2016/08/26 20:00"}
      ]
    },
    {
      title: "2016/08/27",
      intervals: [
        {min_date: "2016/08/27 09:00", max_date: "2016/08/27 10:00"},
        {min_date: "2016/08/27 10:00", max_date: "2016/08/27 11:00"},
        {min_date: "2016/08/27 11:00", max_date: "2016/08/27 12:00"},
        {min_date: "2016/08/27 12:00", max_date: "2016/08/27 13:00"},
        {min_date: "2016/08/27 13:00", max_date: "2016/08/27 14:00"},
        {min_date: "2016/08/27 14:00", max_date: "2016/08/27 15:00"},
        {min_date: "2016/08/27 15:00", max_date: "2016/08/27 16:00"},
        {min_date: "2016/08/27 16:00", max_date: "2016/08/27 17:00"},
        {min_date: "2016/08/27 17:00", max_date: "2016/08/27 18:00"},
        {min_date: "2016/08/27 18:00", max_date: "2016/08/27 19:00"},
        {min_date: "2016/08/27 19:00", max_date: "2016/08/27 20:00"}
      ]
    }
  ],

  actions:{
    selectInterval(interval) {
      let range = {
        start: interval.min_date,
        end: interval.max_date
      };
      this.set("range", range);
    },
    selectInterval2(interval) {
      let range = {
        start: interval.min_date,
        end: interval.max_date
      };
      this.set("range2", range);
    }
  }
});
