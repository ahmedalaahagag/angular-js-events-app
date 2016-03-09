/**
 * Created by hagag on 09/03/16.
 */
eventsApp.controller('EditEventController',function($scope){
    $scope.saveEvent = function(event,form){
        if(form.$valid){
            alert("Submitted")
        }
    };
    $scope.cancelEdit = function(){
        window.location = '/EventDetails.html'
    };
})