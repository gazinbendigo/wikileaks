/**
 * Created by holly on 8/11/16.
 */

BlazeLayout.setRoot('body');

const authenticatedRoutes = FlowRouter.group({
    name: 'authenticated'
});

const publicRoutes = FlowRouter.group({
    name: 'public',
    triggersEnter: [publicRedirect] //Allows an Array of functions to be executed b4 all of the routes in our Public Group
});

publicRoutes.route( '/invite/:token', {
    name: 'invite',
    action() {
        BlazeLayout.render('baseLayout', {content: 'invite', menu: 'publicMenu'});
    }
});

publicRoutes.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render("baseLayout", {content: "home", menu: 'publicMenu'});
    }
});

/* Page not Found */
FlowRouter.notFound = {
    action() {
        BlazeLayout.render( 'default', { yield: 'notFound' } );
    }
};

/* Public Routes */
publicRoutes.route( '/login', {
    name: 'login',
    action() {
        BlazeLayout.render( 'default', { yield: 'login' } );
    }
});

publicRoutes.route( '/recover-password', {
    name: 'recover-password',
    action() {
        BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
    }
});

publicRoutes.route( '/reset-password/:token', {
    name: 'reset-password',
    action() {
        BlazeLayout.render( 'default', { yield: 'resetPassword' } );
    }
});

publicRoutes.route( '/manageusers', {
    name: 'manageusers',
    action() {
        BlazeLayout.render("baseLayout", {content: "manageUsers"});
    }
});

publicRoutes.route('/userprofile/:adm', {
    name: 'userProfile',
    action(){
        BlazeLayout.render("baseLayout", {content: "userProfile"});
    }
});

publicRoutes.route( '/spacebars', {
    name: 'spacebars',
    action() {
        BlazeLayout.render("baseLayout", {content: "spacebars"});
    }
});

/* Authenticated Routes */