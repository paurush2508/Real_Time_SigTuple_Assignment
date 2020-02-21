var app = angular.module('app', []);

app.controller('sigTupleController', ['$scope', function ($scope) {
    let outerBox = document.getElementById("outerBox");
    outerBox.style.width = "550px";
    outerBox.style.height = "450px";

    $scope.xCoordinate = 40;
    $scope.yCoordinate = 40;
    $scope.width = 40;
    $scope.height = 40;


    let innerBox = document.getElementById("innerBox");
    innerBox.style.width = `${$scope.width}px`;
    innerBox.style.height = `${$scope.height}px`;
    innerBox.style.left = `${$scope.xCoordinate - ($scope.width/2)}px`;
    innerBox.style.bottom = `${$scope.yCoordinate - ($scope.height/2)}px`;

    $scope.xChange = function () {
        let condition = ($scope.xCoordinate > $scope.width) && ($scope.xCoordinate <= (outerBox.style.width.replace("px", "") - $scope.width/2));
        if (condition) {
            innerBox.style.left = `${$scope.xCoordinate - ($scope.width/2)}px`;
        } else {
            innerBox.style.left = "0";
        }
    };

    $scope.yChange = function () {
        let condition = ($scope.yCoordinate > $scope.height) && ($scope.yCoordinate <= (outerBox.style.height.replace("px", "") - $scope.height/2));
        if (condition) {
            innerBox.style.bottom = `${$scope.yCoordinate - ($scope.height/2)}px`;
        } else {
            innerBox.style.bottom = "0";
        }
    };

    $scope.widthChange = function () {
        let outerBoxWidth = Number(outerBox.style.width.replace("px", ""));
        let innerBoxLeft = Number(innerBox.style.left.replace("px", ""));
        let condition = (outerBoxWidth - innerBoxLeft) > $scope.width;
        if (((outerBoxWidth - $scope.width) > 0) && condition) {
                innerBox.style.width = `${$scope.width}px`;
                $scope.xCoordinate = innerBoxLeft + Number(innerBox.style.width.replace("px", ""));
        } else {
            innerBox.style.left = "0px";
            $scope.width = 40;
            $scope.xCoordinate = $scope.width/2;
        }
    };

    $scope.heightChange = function () {
        let outerBoxHeight = Number(outerBox.style.height.replace("px", ""));
        let innerBoxBottom = Number(innerBox.style.bottom.replace("px", ""));
        let condition = (outerBoxHeight - innerBoxBottom) > $scope.height;
        if (((outerBoxHeight - $scope.height) > 0) && condition) {
            innerBox.style.height = `${$scope.height}px`;
            $scope.yCoordinate = innerBoxBottom + Number(innerBox.style.height.replace("px", ""));
        } else {
            innerBox.style.bottom = "0px";
            $scope.height = 40;
            $scope.yCoordinate = $scope.height/2;
        }
    };


}]);
