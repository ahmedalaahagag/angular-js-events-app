/**
 * Created by hagag on 09/03/16.
 */
eventsApp.controller('EditProfileController', function EditProfileController($scope , gravatarUrlBuilder) {
    $scope.user = {};
    $scope.getGravatarUrl = function (email) {
       return gravatarUrlBuilder.buildGravatarUrl(email);
    }
});