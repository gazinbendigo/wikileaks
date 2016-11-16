/**
 * Created by holly on 5/11/16.
 */

Meteor.startup(function(){
   WikiLeaks.remove({});
    if(WikiLeaks.find({}).count() < 1){
        WikiLeaks.insert({title: "wikileak 1", author: "author 1", publisher: "pub 1", LeakType: "leaky"});
        WikiLeaks.insert({title: "wikileak 2", author: "author 2", publisher: "pub 2", LeakType: "highly-leaky"});
        WikiLeaks.insert({title: "wikileak 3", author: "author 3", publisher: "pub 3", LeakType: "super-leaky"});
        WikiLeaks.insert({title: "wikileak 4", author: "author 4", publisher: "pub 4", LeakType: "leaky"});
        WikiLeaks.insert({title: "wikileak 5", author: "author 5", publisher: "pub 5", LeakType: "highly-leaky"});
        WikiLeaks.insert({title: "wikileak 6", author: "author 6", publisher: "pub 6", LeakType: "super-leaky"});
        WikiLeaks.insert({title: "wikileak 7", author: "author 7", publisher: "pub 7", LeakType: "leaky"});
        WikiLeaks.insert({title: "wikileak 8", author: "author 8", publisher: "pub 8", LeakType: "highly-leaky"});
        WikiLeaks.insert({title: "wikileak 9", author: "author 9", publisher: "pub 9", LeakType: "super-leaky"});
        WikiLeaks.insert({title: "wikileak 10", author: "author 10", publisher: "pub 10", LeakType: "leaky"});
        WikiLeaks.insert({title: "wikileak 11", author: "author 11", publisher: "pub 11", LeakType: "highly-leaky"});
        WikiLeaks.insert({title: "wikileak 12", author: "author 12", publisher: "pub 12", LeakType: "super-leaky"});
        WikiLeaks.insert({title: "wikileak 13", author: "author 13", publisher: "pub 13", LeakType: "leaky"});
        WikiLeaks.insert({title: "wikileak 14", author: "author 14", publisher: "pub 14", LeakType: "highly-leaky"});
        WikiLeaks.insert({title: "wikileak 15", author: "author 15", publisher: "pub 15", LeakType: "super-leaky"});
        WikiLeaks.insert({title: "wikileak 16", author: "author 16", publisher: "pub 16", LeakType: "leaky"});
        WikiLeaks.insert({title: "wikileak 17", author: "author 17", publisher: "pub 17", LeakType: "highly-leaky"});
        WikiLeaks.insert({title: "wikileak 18", author: "author 18", publisher: "pub 18", LeakType: "super-leaky"});
        WikiLeaks.insert({title: "wikileak 19", author: "author 19", publisher: "pub 19", LeakType: "leaky"});
        WikiLeaks.insert({title: "wikileak 20", author: "author 20", publisher: "pub 20", LeakType: "highly-leaky"});
        WikiLeaks.insert({title: "wikileak 21", author: "author 21", publisher: "pub 21", LeakType: "super-leaky"});
        WikiLeaks.insert({title: "wikileak 22", author: "author 22", publisher: "pub 22", LeakType: "leaky"});
        WikiLeaks.insert({title: "wikileak 23", author: "author 23", publisher: "pub 23", LeakType: "highly-leaky"});
        WikiLeaks.insert({title: "wikileak 24", author: "author 24", publisher: "pub 24", LeakType: "super-leaky"});
        WikiLeaks.insert({title: "wikileak 25", author: "author 25", publisher: "pub 25", LeakType: "leaky"});
        WikiLeaks.insert({title: "wikileak 26", author: "author 26", publisher: "pub 26", LeakType: "highly-leaky"});
        WikiLeaks.insert({title: "wikileak 27", author: "author 27", publisher: "pub 27", LeakType: "super-leaky"});
        WikiLeaks.insert({title: "wikileak 28", author: "author 28", publisher: "pub 28", LeakType: "leaky"});
        WikiLeaks.insert({title: "wikileak 29", author: "author 29", publisher: "pub 29", LeakType: "highly-leaky"});
        WikiLeaks.insert({title: "wikileak 30", author: "author 30", publisher: "pub 30", LeakType: "super-leaky"});
    }

    Users.remove({});
    Users.insert({USER_ID: 1, ADM: "ADM1111", USER_NME: "James Brown", DESC: "Hot diggity doogg.", EMAIL: "User1@hotmail.com", PASSWD: "12345678"});
    Users.insert({USER_ID: 2, ADM: "ADM1122", USER_NME: "Joe Stubby", DESC: "Three percent",EMAIL: "User2@hotmail.com", PASSWD: "12345678"});
    Users.insert({USER_ID: 3, ADM: "ADM1133", USER_NME: "Fred Flintstone", DESC: "Wise guy",EMAIL: "User3@hotmail.com", PASSWD: "12345678"});
    Users.insert({USER_ID: 4, ADM: "ADM1144", USER_NME: "Barney Rubble", DESC: "Neighbour of the year",EMAIL: "User4@hotmail.com", PASSWD: "12345678"});
    Users.insert({USER_ID: 5, ADM: "ADM1155", USER_NME: "Stevie Wonder", DESC: "Can you see what I see",EMAIL: "User5@hotmail.com", PASSWD: "12345678"});
    Users.insert({USER_ID: 6, ADM: "ADM1166", USER_NME: "LL Kool J", DESC: "Im super fly!",EMAIL: "User6@hotmail.com", PASSWD: "12345678"});
    Users.insert({USER_ID: 7, ADM: "ADM1177", USER_NME: "Harry Potter", DESC: "Abra ca dabra",EMAIL: "User7@hotmail.com", PASSWD: "12345678"});
    Users.insert({USER_ID: 8, ADM: "ADM1188", USER_NME: "Elizabeth Turner", DESC: "Stick to the bretheren code",EMAIL: "User8@hotmail.com", PASSWD: "12345678"});
    Users.insert({USER_ID: 9, ADM: "ADM1199", USER_NME: "Mario Bros", DESC: "High Score",EMAIL: "User9@hotmail.com", PASSWD: "12345678"});
    Users.insert({USER_ID: 10, ADM: "ADM1100", USER_NME: "Kate Oslow", DESC: "Deck the halls with holly",EMAIL: "User10@hotmail.com", PASSWD: "12345678"});
    Users.insert({USER_ID: 11, ADM: "ADM0011", USER_NME: "Wheres Wally", DESC: "Cant touch this",EMAIL: "User11@hotmail.com", PASSWD: "12345678"});

    ApplicationRoles.remove({});
    ApplicationRoles.insert({ROLE_ID: 1, ROLE_NME: "ReadOnly", ROLE_DESC: "Allows User readonly access"});
    ApplicationRoles.insert({ROLE_ID: 2, ROLE_NME: "Admin", ROLE_DESC: "Allows User Full access"});
    ApplicationRoles.insert({ROLE_ID: 3, ROLE_NME: "DynamicRouting", ROLE_DESC: "Allows User to manage Dynamic Routing"});
    ApplicationRoles.insert({ROLE_ID: 4, ROLE_NME: "ServiceVersion", ROLE_DESC: "Allows User to manage Service Versioning"});

    UserRoles.remove({});
    UserRoles.insert({USER_ROLE_ID: 1, USER_ID:1, ROLE_ID: 1});
    UserRoles.insert({USER_ROLE_ID: 2, USER_ID:2, ROLE_ID: 3});
    UserRoles.insert({USER_ROLE_ID: 3, USER_ID:2, ROLE_ID: 4});
    UserRoles.insert({USER_ROLE_ID: 4, USER_ID:3, ROLE_ID: 2});
    UserRoles.insert({USER_ROLE_ID: 5, USER_ID:4, ROLE_ID: 1});
    UserRoles.insert({USER_ROLE_ID: 6, USER_ID:4, ROLE_ID: 3});
    UserRoles.insert({USER_ROLE_ID: 7, USER_ID:4, ROLE_ID: 4});
    UserRoles.insert({USER_ROLE_ID: 8, USER_ID:5, ROLE_ID: 2});
    UserRoles.insert({USER_ROLE_ID: 9, USER_ID:6, ROLE_ID: 1});
    UserRoles.insert({USER_ROLE_ID: 10, USER_ID:7, ROLE_ID: 1});
    UserRoles.insert({USER_ROLE_ID: 11, USER_ID:2, ROLE_ID: 1});
    UserRoles.insert({USER_ROLE_ID: 12, USER_ID:8, ROLE_ID: 2});
    UserRoles.insert({USER_ROLE_ID: 13, USER_ID:9, ROLE_ID: 1});
    UserRoles.insert({USER_ROLE_ID: 14, USER_ID:10, ROLE_ID: 1});
    UserRoles.insert({USER_ROLE_ID: 15, USER_ID:10, ROLE_ID: 4});
    UserRoles.insert({USER_ROLE_ID: 16, USER_ID:11, ROLE_ID: 2});

});