import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reminder', 'Unit | Model | reminder', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let reminder = this.subject();
  // let store = this.store();
  assert.ok(!!reminder);
});
