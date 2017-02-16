import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | edit reminder');

test('allow a user to edit existing reminders', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');

  click('.spec-reminder-edit-link:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1/edit');

    andThen (()=> assert.equal(find('.spec-reminder-title:first').text().trim(), Ember.$('.spec-reminder-item:first').find('h2').text().trim()))
    andThen (()=> assert.equal(find('.spec-reminder-date:first').text().trim(), Ember.$('.spec-reminder-item:first').find('p:first').text().trim()))
    andThen (()=> assert.equal(find('.spec-reminder-notes:first').text().trim(), Ember.$('.spec-reminder-item:first').find('p:eq(1)').text().trim()))

    fillIn('.input-title', 'fresh update');
    fillIn('.input-date', 'future');
    fillIn('.textarea-notes', 'fly!!');

   click('.update-reminder-submit');

   andThen (()=> assert.equal(find('.spec-reminder-title:first').text().trim(), 'fresh update'))
   andThen (()=> assert.equal(find('.spec-reminder-date:first').text().trim(), `future`))
   andThen (()=> assert.equal(find('.spec-reminder-notes:first').text().trim(), 'fly!!'))
  });
});
