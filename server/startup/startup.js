/**
 * Created by holly on 11/11/16.
 */


Meteor.startup(function () {

    //Browser Policy
    //Allow All content types from this origin
    BrowserPolicy.content.allowOriginForAll( 'fonts.googleapis.com' );
    BrowserPolicy.content.allowOriginForAll( 'fonts.gstatic.com' );

    BrowserPolicy.framing.disallow();

    //Create User and Build Accounts


});