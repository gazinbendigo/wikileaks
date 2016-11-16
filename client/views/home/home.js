/**
 * Created by holly on 8/11/16.
 */


Template.home.onCreated(function(){
    let template = Template.instance();
    template.subscribe("wikileaks");
    //console.log(Meteor.userId());
    //console.log(Meteor.user.findOne({}));
});

Template.home.helpers({
    leaks: function(){
        return WikiLeaks.find({LeakType: {$eq: "leaky"}});
    }
});