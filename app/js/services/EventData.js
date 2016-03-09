/**
 * Created by hagag on 09/03/16.
 */
eventsApp.factory('eventData', function ($http,$q) {
    var data = {
        name : 'Angular Boot Camp',
        date : 1457522739000,
        time : '10 PM',
        price : 400,
        location :{
            address : 'Google HQ',
            city:'Mountain View',
            provence : 'CA'
        },
        imageURL : './img/logo.png',
        sessions : [{
            name :'Directives',
            creatorName :'Bob',
            duration : 1,
            level :'Intro',
            abstract : 'Talking About Directives',
            upVoteCount : 0,
        },{
            name :'Modules',
            creatorName :'Ahmed',
            duration : 2,
            level :'Intermediate',
            abstract : 'Talking About Modules',
            upVoteCount : 0,
        },{
            name :'Views',
            creatorName :'Nagy',
            duration : 3 ,
            level :'Advanced',
            abstract : 'Talking About Views',
            upVoteCount : 0,
        }]
    }
    return {
        getEvent : function(){
            var defer = $q.defer();
            $http.get('./data/event.js')
             .success(function(data){
                defer.resolve(data);
            }).error(function(data){
                defer.reject(data);
            });
            return defer;
        }
    };
});