import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< HEAD
  this.route('reminders');
=======
  this.route('reminders', { path: '/reminders' }, function() {
    this.route('reminder', {path: '/reminder/:reminder_id'});
  });
>>>>>>> 49e50aa... display individual reminders above reminders list on dynamic reminder route
});



export default Router;
