import { moduleFor, test } from 'ember-qunit';

moduleFor('route:reminders/index', 'Unit | Route | reminders/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let index = this.subject();
  assert.ok(index);
});
