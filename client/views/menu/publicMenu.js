/**
 * Created by holly on 21/08/16.
 */

Template.publicMenu.onCreated(function(){

});

Template.publicMenu.rendered = function() {

};

Template.publicMenu.events({

});

Template.publicMenu.helpers({
    consumerPropertiesPath: function() {
        return FlowRouter.path('consumerProperties');
    },

    createEnvironmentPath: function () {
        return FlowRouter.path('createEnvironment');
    },

    updateConfigurationPath: function () {
        return FlowRouter.path('updateConfiguration');
    },

    loginPath: () => {
        return FlowRouter.path("login");
    }
});
