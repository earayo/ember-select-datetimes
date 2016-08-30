import Ember from 'ember';
import layout from '../templates/components/collapse-datetimes';
const { isEmpty, isPresent } = Ember;

export default Ember.Component.extend({
  layout: layout,
  className: 'input--button',
  panelActions: Ember.inject.service(),
  dates: null,
  onselectcallback: null,
  handlerController: null,
  intervalSelect: null,
  classNameDateSelected: "date_selected",
  collapsible: true,
  dateSelected: "",

  didInsertElement() {
    this._super(...arguments);
  },

  actions: {
    selectInterval(interval) {
      console.log("SelectInterval Component -> ", interval)
      let callback = this.get("selectIntervalCallback"),
          controller = this.get("handlerController");
      if (isPresent(callback) && isPresent(controller) && !isEmpty(interval)) {
        controller.send(callback, interval);
        if (!this.collapsible) {
          this.set("interval", interval);
        } else {
          Ember.$(`input:radio[name="${this.nameElement}"]`).parents("li").removeClass(this.classNameDateSelected);
          Ember.$(`input:radio:checked[name="${this.nameElement}"]`).parents("li").addClass(this.classNameDateSelected);
        }
      }
    }
  }

});
