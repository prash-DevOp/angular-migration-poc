var app = angular.module('pocApp', []);
console.log('AngularJS module pocApp loaded:', app);

app.controller('ListController', function ($scope) {
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
});
