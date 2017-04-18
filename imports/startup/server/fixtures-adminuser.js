// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/users/users.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Users.find().count() === 0) {
    const data = [
      {
        userName: 'support',
        password: '123456',
        firstName: 'admin',
        lastName: 'officebrain',
        email: 'admin@officebrain.com',
        isAdmin: true,
        createdAt: new Date(),
      },
    ];

    data.forEach(users => Users.insert(users));
  }
});
