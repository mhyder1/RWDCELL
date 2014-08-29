var myApp = angular.module('mobileWebApp',['ngRoute','ui.bootstrap']);

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.
        when('/phones',{
            templateUrl: 'views/phones.html',
            controller: "PhoneCtrl"
        }).
         when('/plans',{
                templateUrl: 'views/plans.html',
                controller: "PlansCtrl"
        }).
         when('/cart',{
                templateUrl: 'views/cart.html',
                controller: "CartCtrl"
        }).
         when('/',{
                templateUrl: 'views/home.html',
                controller: "HomeCtrl"
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

myApp.controller('HomeCtrl',function($scope){
    $scope.interval = 5000;
    
    $scope.slides = [
        {
            img: "images/phone.png",
            url: "#/phones",
            text: "Phone #1",
            title: "Fancy Phone"
        },
        {
            img: "images/phone.png",
            url: "#/phones",
            text: "Phone #2",
            title: "Super Fancy Phone"
        },
        {
            img: "images/phone.png",
            url: "#/phones",
            text: "Phone #3",
            title: "Super Deluxe Fancy Phone"
        },
        {
            img: "images/phone.png",
            url: "#/phones",
            text: "Phone #4",
            title: "Awesome Super Deluxe Fancy Phone"
        }
    ];
});

myApp.directive('activeLink', ['$location', function(location) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var path = attrs.href;
      path = path.substring(1); //hack because path does not return including hashbang
      scope.location = location;
      scope.$watch('location.path()', function(newPath) {
        if (path === newPath) {
          element.parent().addClass("active");
        } else {
          element.parent().removeClass("active");
        }
      });
    }
  };
}]);