import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  actions: {
    deleteReminder() {
      this.get('store').findRecord('reminder', this.reminder.id, { backgroundReload: false })
      .then(reminder => {
        reminder.destroyRecord()
      })
    }
  }
});
