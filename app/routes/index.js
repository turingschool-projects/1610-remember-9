import Ember from 'ember';

const reminders = [
  'dentist', 'another appt', 'birthday party', 'walk dog', 'ui challenge'
]

export default Ember.Route.extend({
  model() {
    return reminders
  }
});
