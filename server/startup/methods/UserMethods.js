/**
 * Created by holly on 18/11/16.
 */

Meteor.methods({
    setRoleOnUser(params){
        check(params,{
            user: String,
            password: String
        });

        try {
            Roles.setUserRoles(params.user, [ params.role ] );
        }
        catch( exception ) {
            return exception;
        }
    }


});