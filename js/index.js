let url = window.location.origin;
//let url = window.location.origin + '/shalithasuranga.github.io';

var app = angular.module('profilePage', ['ngSanitize']);
app.controller('mainController', ($scope, $http, $sce) => {
    $http.get(url + '/config.json')
    .then((response) => {
        let firstName = response.data.personalDetails.firstName;
        let lastName = response.data.personalDetails.lastName;
        let description = response.data.personalDetails.description;
        let profileImage = response.data.media.profileImage;
        document.getElementById('profileImageNode').src = profileImage;
        document.getElementById('li').href = response.data.links.professional.LinkedIn;

        document.getElementById('fb').href = response.data.links.social.Facebook;
        document.getElementById('tw').href = response.data.links.social.Twitter;
        document.getElementById('it').href = response.data.links.social.Instagram;

        document.getElementById('gh').href = response.data.links.coding.GitHub;
        document.getElementById('hr').href = response.data.links.coding.Hackerrank;
        document.getElementById('he').href = response.data.links.coding.Hackerearth;

        $scope.name =  firstName + ' ' +  lastName;

        $scope.description = $sce.trustAsHtml(description);
    });
});