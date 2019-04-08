(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];

    function LunchCheckerController($scope) {
        $scope.lunchList = '';
        $scope.response = '';

        $scope.checkLunch = function (listOfFood) {
            var numberOfItems = checkNumberOfItems(listOfFood);

            console.log("number", numberOfItems);

            if (listOfFood != '') {
                if (numberOfItems <= 3) {
                    $scope.response = 'Enjoy!';
                } else if (numberOfItems > 3) {
                    $scope.response = 'Too much';
                }
            } else {
                $scope.response = 'Please enter data';
            }
        }
    }

    function checkNumberOfItems(listOfFood) {
        var itemsInList = 0;
        for (let i = 0; i < listOfFood.length; i++) {
            if (listOfFood[i] == ',') {
                itemsInList++;
                console.log(itemsInList);
            }
        }
        return ++itemsInList;
    }
})();