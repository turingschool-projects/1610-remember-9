/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminders', 5);

  visit('/reminders');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

test('clicking on an individual item will take you to a dynamic route that displays that reminder', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder-title:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal(Ember.$('.spec-reminder-item:first').find('h2').text().trim(), Ember.$('.spec-reminder-title').first().text().trim());
  });
});

test('when there are no reminders, a message that notifies you of that will display', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.no-reminder-msg').length, 1);
    assert.equal(Ember.$('.no-reminder-msg').text().trim(), "You don't have any reminders yet!");
  });
});

test('each reminder can be deleted', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });

  click('.spec-reminder-delete-link:first');

  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-item').length, 4);
  });
});

test('when a reminder is deleted on its route, the reminder will be deleted and the user will be redirected to the reminders page', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder-title:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
  });

  click('.spec-reminder-delete-link:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 4);
  });
});
