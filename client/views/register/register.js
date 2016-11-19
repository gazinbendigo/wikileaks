/**
 * Created by holly on 19/11/16.
 */

Template.register.onCreated(function () {

});

Template.register.helpers({

});

Template.register.events({
    "click #registerBttn": function (event, template) {
        event.preventDefault();

        // Trim Helper
        var trimInput = function(val) {
            return val.replace(/^\s*|\s*$/g, "");
        }

        let firstName = template.find("inputFirstName").value,
            lastName = template.find("inputLastName").value,
            email = trimInput(template.find("inputEmail").value),
            password = template.find("inputPassword").value,
            confPassword = template.find("inputConfirmPassword").value;


        // Check password is at least 6 chars long
        let isValidPassword = function(pwd, pwd2) {
            if (pwd === pwd2) {
                return pwd.length >= 6 ? true : false;
            } else {

            }
        }

        if(isValidPassword(password, confPassword)){
            Accounts.createUser({
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password
            }, function (err) {
                if(err){

                }
                else {
                    //TODO: Go to login page
                }
            })
        }
    }
});