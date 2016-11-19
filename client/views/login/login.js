/**
 * Created by holly on 19/11/16.
 */

Template.login.onCreated(function () {

});

Template.login.helpers({
    getRegisterPath: function(){
        return FlowRouter.path("register");
    }
});

Template.login.events({
    "click #loginBttn": function (event, template) {
        event.preventDefault();
        console.log(template.find("#inputEmail").value);
        console.log(template.find("#inputPassword").value);
        console.log("Click");

    }
});