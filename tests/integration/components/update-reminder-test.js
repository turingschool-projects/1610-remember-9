import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-reminder', 'Integration | Component | update reminder', {
  integration: true
});

test('it renders the update form correctly', function(assert) {

  this.render(hbs`{{update-reminder}}`);

  assert.equal(this.$('.update-reminder-form').length, 1);
  assert.equal(this.$('label').first().text().trim(), 'Title:');
  assert.equal(this.$('label:eq(1)').text().trim(), 'Date');
  assert.equal(this.$('label:eq(2)').text().trim(), 'Notes');
  assert.equal(this.$('input').length, 2);
  assert.equal(this.$('textarea').length, 1);
  assert.equal(this.$('.update-reminder-submit').length, 1);
});
