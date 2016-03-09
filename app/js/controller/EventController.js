/**
 * Created by hagag on 09/03/16.
 */
'user strict';

eventsApp.controller('EventController',function EventController($scope,eventData){
        $scope.sortorder = '-upVoteCount';
        $scope.event = eventData.getEvent();
        $scope.upVoteSession = function (session) {
            session.upVoteCount ++;
        }
        $scope.downVoteSession  = function(session){
            session.upVoteCount --;
        }

})