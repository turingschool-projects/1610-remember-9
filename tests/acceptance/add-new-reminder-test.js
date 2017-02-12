import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add new reminder');

test('allow a user to add a new reminder', function(assert) {
  visit('/reminders/new');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new');

    fillIn('.input-title', 'get new kicks');
    fillIn('.input-date', '3-3-2010');
    fillIn('.textarea-notes', 'on sale though');

    click('.add-reminder-submit');
    andThen (()=> assert.equal(find('.spec-reminder-title').text().trim(), 'get new kicks'))
    andThen (()=> assert.equal(find('.spec-reminder-date').text().trim(), '3-3-2010'))
    andThen (()=> assert.equal(find('.spec-reminder-notes').text().trim(), 'on sale though'))

  });
});
