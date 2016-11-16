/**
 * Created by holly on 10/11/16.
 */

Template.userProfile.onCreated(function() {
    let template = Template.instance();
    template.subscribe("Users");

    let adm = FlowRouter.getParam("adm");
    let profile = Users.findOne({ADM: adm});
    console.log(profile);
    this.userProfile = new ReactiveVar(profile);
});

Template.userProfile.helpers({
    getUserProfile: function(){
        return Template.instance().userProfile.get();
    }
});

Template.userProfile.events({
    "click #cancelProfileEdit": function(event, template){
        event.preventDefault();
        FlowRouter.go("manageusers");
    }
});