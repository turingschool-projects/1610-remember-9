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

test('edit reminder and revert to original text by clicking revert button', function(assert) {

  visit('/');
  click('.add-reminder-link-btn');

  fillIn('.input-title', 'probably a title');
  fillIn('.input-date', '4/28');
  fillIn('.textarea-notes', 'probably some notes');

  click('.add-reminder-submit');
  click('.spec-reminder-title');
  click('.spec-reminder-edit-link');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1/edit');
  });

  fillIn('.input-title', 'ALLIGATOR');
  fillIn('.input-date', 'TODAY');
  fillIn('.textarea-notes', 'WOWOWOWOWOW');

  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-title').text().trim(), 'ALLIGATOR');
    assert.equal(Ember.$('.spec-reminder-date').text().trim(), 'TODAY');
    assert.equal(Ember.$('.spec-reminder-notes').text().trim(), 'WOWOWOWOWOW');
  });

  click('.revert-reminder-btn');

  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-title').text().trim(), 'probably a title');
    assert.equal(Ember.$('.spec-reminder-date').text().trim(), '4/28');
    assert.equal(Ember.$('.spec-reminder-notes').text().trim(), 'probably some notes');
  });
});
