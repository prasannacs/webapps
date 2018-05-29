var boxapp = angular.module('boxapp',[]);

boxapp.controller('boxCtrl',function($scope,$http){
	$scope.cal = 1;
	//$http.get('https://account.box.com/api/oauth2/authorize?response_type=code&client_id=76ram8ecfaj2cm1dc7ypklpi15sgjn9c&redirect_uri=file:///C:/Workspace/webapps/box-oauth-appuser.html').then

/*
	$scope.boxLogin = function()	{
		$scope.cal = 2;
		console.log("I've been pressed!");  
        $http.get("http://localhost:8080/hello")
            .then(function successCallback(response){
                $scope.response = response;
                alert("res");
            }, function errorCallback(response){
                console.log("Unable to perform get request");
                alert("err "+JSON.stringify(response));
            });
	};

    */

    $scope.boxLogin = function()    {
        alert("Comes");
        var client_id="76ram8ecfaj2cm1dc7ypklpi15sgjn9c";
        var client_secret = "0vACSzY3R8KWjKLKd0vmAYj5iSOWbduN";
        var redirect_uri="http://localhost:8080/hello/auth";
        var url="https://account.box.com/api/oauth2/authorize?response_type=code&client_id="+client_id+"&redirect_uri="+redirect_uri;
        window.location.replace(url);
    };

});

