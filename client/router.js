/**
 * Created by holly on 8/11/16.
 */

BlazeLayout.setRoot('body');

const authenticatedRoutes = FlowRouter.group({
    name: 'authenticated'
});

const publicRoutes = FlowRouter.group({
    name: 'public'//,
    //triggersEnter: [publicRedirect] //Allows an Array of functions to be executed b4 all of the routes in our Public Group
});

const publicRedirect = (context, redirect) => {
    //If the user is logged in redirect them to a logged in page.
    if(Meteor.userId()){

    }
}

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
publicRoutes.notFound = {
    name: "notFound",
    action() {
        BlazeLayout.render("baseLayout", {content: 'notFound', menu: "publicMenu" } );
    }
};

/* Public Routes */
publicRoutes.route( '/login', {
    name: 'login',
    action() {
        BlazeLayout.render("baseLayout", {content: "login", menu: "publicMenu"});
    }
});

publicRoutes.route("/register", {
    name: "register",
    action() {
        BlazeLayout.render("baseLayout", {content: "register", menu: "publicMenu"});
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