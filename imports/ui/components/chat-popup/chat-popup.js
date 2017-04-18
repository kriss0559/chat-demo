import { Users } from '/imports/api/users/users.js';
import { Meteor } from 'meteor/meteor';
import './chat-popup.html';

// Template.admin_user.onCreated(function () {
//   Meteor.subscribe('users.all');
// });
//
// Template.admin_user.helpers({
//   users() {
//     return Users.find({isAdmin:true});
//   },
// });
Template.chat_popup.events({
  'click #addClass'(event) {
    event.preventDefault();
 $('#qnimate').addClass('popup-box-on');

  },
  'click #removeClass'(event) {
    event.preventDefault();
 $('#qnimate').removeClass('popup-box-on');

  },
});
