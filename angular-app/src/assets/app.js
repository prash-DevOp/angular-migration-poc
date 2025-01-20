var app = angular.module('pocApp', []);
/* Pre-migration
app.service('ItemService', function () {
    this.getItems = function () {
        return ['Item 1', 'Item 2', 'Item 3'];
    };
});
*/
app.controller('ListController', function (ItemService) {
    this.items = ItemService.getItems();
});
