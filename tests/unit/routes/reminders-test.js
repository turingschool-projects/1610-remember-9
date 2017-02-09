import { moduleFor, test } from 'ember-qunit';

moduleFor('route:reminders', 'Unit | Route | reminders', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let reminders = this.subject();
  assert.ok(reminders);
});
