// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Users } from './users.js';

Meteor.methods({
  'users.insert'(userName, password, firstName, lastName, email, isAdmin) {
    check(url, String);
    check(title, String);

    return Users.insert({
      userName,
      password,
      firstName,
      lastName,
      email,
      isAdmin
      createdAt: new Date(),
    });
  },
});
