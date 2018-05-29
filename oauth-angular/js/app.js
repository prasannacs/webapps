var example = angular.module("example", ['ui.router']);

example.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('secure', {
            url: '/secure',
            templateUrl: 'templates/secure.html',
            controller: 'SecureController'
        });
    $urlRouterProvider.otherwise('/login');
});

example.controller("LoginController", function($scope) {

    $scope.login = function() {

        var client_id="76ram8ecfaj2cm1dc7ypklpi15sgjn9c";
        var client_secret = "0vACSzY3R8KWjKLKd0vmAYj5iSOWbduN";
        var redirect_uri="http://localhost:7093/oauth_callback.html";
        var url="https://account.box.com/api/oauth2/authorize?response_type=code&client_id="+client_id+"&redirect_uri="+redirect_uri;

        window.location.href = url;
    }

});

example.controller("SecureController", function($scope) {

    $scope.accessToken = JSON.parse(window.localStorage.getItem("box")).oauth.auth_code;
});