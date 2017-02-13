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
