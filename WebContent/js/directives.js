'use strict';

var directives = angular.module('directives', []);

directives.directive('menu', function($compile) {
	return {
		restrict : 'E',
		templateUrl : 'partials/menu.html',
		link : function(scope, el, attrs) {
			var menus = angular.fromJson(sessionStorage.menus);
			angular.forEach(menus, function(value, key) {
				if(angular.isDefined(value.click)){
					value.ifClick = true;
				}
			});
			scope.menus = menus;
		}
	};
});

////Establishes the type of question and therefore what should be displayed
//app.directive('questionType', function($http, $compile) {
//  return {
//    restrict: 'A',
//    link: function(scope, element, attr, model) {
//
//      switch (scope.Question.inputType) {
//        case 'checkbox':
//          //element.append('<input type="checkbox" ng-model="Question.checked"/><button ng-if="input.checked" >X</button>');
//          break;
//        case 'text':
//          var strElm = '<button class="btn btn-info" ng-click="selectProperties()" title="Assign this user"><span class="glyphicon glyphicon-user"></span>Assignment</button>';
//          var compiledHtml = $compile(strElm);
//          element.append(compiledHtml);
//          break;
//      }
//    }
//  };
//});

directives.directive('dable', function($parse) {
	return {
		restrict : 'E',
		templateUrl : 'partials/dataTable.html',
		link : function($scope, el, attrs) {
		}
	};
});

directives.directive('myModel', function($compile) {
	return {
		link : function(scope, elm, attrs) {
			elm.removeAttr('my-model');
			scope.$watch(attrs.myModel, function() {
				if (attrs.myModel)
					$compile(elm.attr('ng-model', attrs.myModel))(scope)
			})
		}
	}
})
