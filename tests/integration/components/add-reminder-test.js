import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-reminder', 'Integration | Component | add reminder', {
  integration: true,
});

test('it renders the add reminder form correctly', function(assert) {

  this.render(hbs`{{add-reminder}}`);

  assert.equal(this.$('label').first().text().trim(), 'Title:');
  assert.equal(this.$('label:eq(1)').text().trim(), 'Date');
  assert.equal(this.$('label:eq(2)').text().trim(), 'Notes');
  assert.equal(this.$('input').length, 2);
  assert.equal(this.$('textarea').length, 1);
  assert.equal(this.$('button').length, 1);

});

skip('it should trigger addReminder action on submit', function(assert) {

  this.set('fakeAdd', (store) => assert.deepEqual(store, {reminder: {title: 'grocery shopping', date: '', notes: ''}}))

  this.render(hbs`{{add-reminder addReminder=(action fakeAdd)}}`);

  this.$('.input-title').val('grocery shopping');
  // this.$('.input-date').val('');
  // this.$('.textarea-notes').val('');

  this.$('.input-title').change();
//  this.$('.input-date').change();
//  this.$('.textarea-notes').change();

  this.$('.add-reminder-submit').click()

});
