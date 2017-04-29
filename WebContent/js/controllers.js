'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', [ '$scope', 'checkCreds', '$location',
		'ModuleList', 'System', 'Module',
		function($scope, checkCreds, $location, ModuleList, System, Module) {
			if (!checkCreds()) {
				$location.path("/login");
			}
			System.get({}, function(response) {
				sessionStorage.menus = angular.toJson(response.menus);
			}, function(response) {
				console.log("error : " + angular.toJson(response));
			});
			ModuleList.get({}, function(response) {
				$scope.moduleList = response
			}, function(response) {
				console.log("error : " + angular.toJson(response));
			});
			$scope.openModule = function(_id) {
				Module.get({
					"id" : _id
				}, function(response) {
					sessionStorage.module = angular.toJson(response);
					$location.path("/module");
				}, function(response) {
					console.log("error : " + angular.toJson(response));
				});
			};
		} ]);

controllers.controller('ModuleCtrl', [ '$scope', 'checkCreds', '$location', 'DataList', 'Page', function($scope, checkCreds, $location, DataList, Page) {
	if(!checkCreds()){
		$location.path("/login");
	}
	var module = angular.fromJson(sessionStorage.module);
	$scope.module = module;
	sessionStorage.menus = angular.toJson(module.menus);
	DataList.get({
		"dataType" : module.dataType
	}, function(response) {
		if (response.length != 0) {
			$scope.datas = response;
			var titles = Object.keys($scope.datas[0]);
			angular.forEach(titles,function(value,i){
				if("_id" == value || "dataType" == value)
					titles.splice(i,1);
			});
			$scope.titles = titles;
		} else {
			
		}
	}, function(response) {
		console.log("error : " + angular.toJson(response));
	});
	$scope.click = function(clickParam) {
		Page.get({
			pageName : module.dataPage
		}, function(response) {
			sessionStorage.template = angular.toJson(response);
			$location.path("/addData");
		}, function(response) {
			console.log("error : " + angular.toJson(response));
		});
	}
	

	$scope.update = function(_id) {
		Page.get({
			pageName : module.dataPage
		}, function(response) {
			sessionStorage.template = angular.toJson(response);
			$location.path("/updateData/" + _id);
		}, function(response) {
			console.log("error : " + angular.toJson(response));
		});
	}
} ]);

controllers.controller('DataCtrl', [ '$scope', '$location', '$routeParams', 'Data', 'checkCreds', function($scope, $location, $routeParams, Data, checkCreds) {
	if(!checkCreds()){
		$location.path("/login");
	}
	$scope.isCreatePage = $location.path() == "/addData";
	$scope.isUpdatePage = $location.path() != "/addData";
	sessionStorage.menus = angular.toJson([]);
	var page = angular.fromJson(sessionStorage.template);
	$scope.page = page;
	$scope.formData = {};
	if ($scope.isUpdatePage) {
		Data.get({
			id : $routeParams.id
		}, function(response) {
			$scope.formData = response;
		}, function(response) {
			console.log("error : " + angular.toJson(response));
		})
	}
	$scope.submit = function() {
		var formData = $scope.formData;
		formData["dataType"] = page.dataType;
		if ($scope.isCreatePage) {
			Data.save(formData, function(response) {
				$scope.isSuccess = true;
				$scope.isFail = false;
				$scope.message = "succefully";
			}, function(response) {
				$scope.isSuccess = false;
				$scope.isFail = true;
				$scope.message = "failly";
				console.log("error : " + angular.toJson(response));
			});
		} else if ($scope.isUpdatePage) {
			Data.update(formData, function(response) {
				$scope.isSuccess = true;
				$scope.isFail = false;
				$scope.message = "succefully";
			}, function(response) {
				$scope.isSuccess = false;
				$scope.isFail = true;
				$scope.message = "failly";
				console.log("error : " + angular.toJson(response));
			});
		}
	}
} ]);

controllers.controller('Module2Ctrl', [ '$scope', 'checkCreds', '$location', function($scope, checkCreds, $location) {
	if(!checkCreds()){
		$location.path("/login");
	}
	$('#tags_1').tagsInput({
		width : 'auto'
	});
} ]);

controllers.controller('rootCtrl', [ '$scope', 'checkCreds', '$location', function($scope, checkCreds, $location) {
	if(!checkCreds()){
		$location.path("/login");
	}
} ]);

controllers.controller('LoginCtrl', [ '$scope', '$location', 'Login',
		'setCreds', 'checkCreds',
		function LoginCtrl($scope, $location, Login, setCreds, checkCreds) {
			if (checkCreds()) {
				$location.path('/');
			}
			$scope.submit = function() {
				var postData = {
					username : $scope.username,
					password : $scope.password
				};
				if (postData.username == "zh" && postData.password == "123") {
					setCreds($scope.username, $scope.password)
					$location.path('/');
				} else {
					$scope.error = "Login Failed"
				}
			};
		} ]);

controllers.controller('LogoutCtrl', [ '$location', 'deleteCreds',
		function($location, deleteCreds) {
			deleteCreds();
			$location.path('/login');
		} ]);
