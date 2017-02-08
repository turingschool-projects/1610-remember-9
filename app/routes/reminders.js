import Ember from 'ember';
import { Factory, faker } from 'ember-cli-mirage';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('reminder');
  }

});
