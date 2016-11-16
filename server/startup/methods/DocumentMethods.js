/**
 * Created by holly on 5/11/16.
 */


Meteor.methods({
   findAllDocuments: function () {
       return WikiLeaks.find({});
   }
});