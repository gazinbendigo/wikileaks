/**
 * Created by holly on 19/11/16.
 */


Accounts.onCreateUser((options, user) => {
    user.profile = options.profile || {};
});

Meteor.startup(function () {
    //Create User and Build Accounts
});