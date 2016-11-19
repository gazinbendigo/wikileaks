/**
 * Created by holly on 8/11/16.
 */

Meteor.publish("wikileaks", function () {
    return WikiLeaks.find({});
});

Meteor.publish("Users", function(){
    return Users.find({});
});

Meteor.publish("ApplicationRoles", function(){
    return ApplicationRoles.find({});
});

Meteor.publish(("userdata"), function(){
    let currentUser = this.userId;
    if(currentUser){
        return Meteor.users.find({_id: currentUser});
    }
    else {
        return this.ready();
    }
    //return UserRoles.find({});
});