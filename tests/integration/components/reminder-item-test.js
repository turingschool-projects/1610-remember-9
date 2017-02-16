import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('reminder-item', 'Integration | Component | reminder item', {
  integration: true,

  beforeEach: function () {
    this.set('reminder', { title: 'appt',  date: 'Feb 3', notes: 'be late'});
  }
});

test('it should render current reminder correctly', function(assert) {

  this.render(hbs`{{reminder-item reminder=reminder}}`);
  assert.equal(this.$('h2').text().trim(), 'appt');
  assert.equal(this.$('p').text().trim(), 'Feb 3be late');
  assert.equal(this.$('button').length, 2)
});
