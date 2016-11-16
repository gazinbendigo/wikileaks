/**
 * Created by holly on 5/11/16.
 */

WikiLeaks = new Mongo.Collection("wikileaks");

WikiLeaks.isLoading = new ReactiveVar(false);
WikiLeaks.isLoaded = new ReactiveVar(true);

function loaded(){
    WikiLeaks.isLoaded.set(true);
    WikiLeaks.isLoading.set(false);
}

function loading(){
    WikiLeaks.isLoaded.set(false);
    WikiLeaks.isLoading.set(true);
}

WikiLeaks.getDocumentsFromServer = function(){
    loading();
    Meteor.call("loadDocuments", function(err, result){
        if(!err){
            WikiLeaks.remove({});
            _.each(result, function(row){
                WikiLeaks.insert(row);
            });
        } else {
            console.log(err);
        }
    });
    loaded();
}

WikiLeaks.update = () => {
    loading();
    Meteor.call("updateLeak", function(err, result){
        if(!err){

        } else {
            console.log(err);
        }
    });
    loaded();
}