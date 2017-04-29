'use strict';

/* Services */

var services = angular.module('services', [ 'ngResource' ]);

services.factory('ModuleList', [ '$resource', function($resource) {
	return $resource("./module/moduleList.do", {}, {
		get : {
			method : 'GET',
			cache : false,
			isArray : true
		}
	});
} ]);

services.factory('System', [ '$resource', function($resource) {
	return $resource("./module/system.do", {}, {
		get : {
			method : 'GET',
			cache : false,
			isArray : false
		}
	});
} ]);

services.factory('Module', [ '$resource', function($resource) {
	return $resource("./module/module.do", {}, {
		get : {
			method : 'GET',
			cache : false,
			isArray : false
		},
		save : {
			method : 'POST',
			cache : false,
			isArray : false
		},
		update : {
			method : 'PUT',
			cache : false,
			isArray : false
		},
		del : {
			method : 'DELETE',
			cache : false,
			isArray : false
		}
	});
} ]);

services.factory('Page', [ '$resource', '$routeParams',
		function($resource, $routeParams) {
			return $resource("./page/singlePage.do", {}, {
				get : {
					method : 'GET',
					cache : false,
					isArray : false
				},
				save : {
					method : 'POST',
					cache : false,
					isArray : false
				},
				update : {
					method : 'PUT',
					cache : false,
					isArray : false
				},
				del : {
					method : 'DELETE',
					cache : false,
					isArray : false
				}
			});
		} ]);

services.factory('PageList', [ '$resource', function($resource) {
	return $resource("./page/pageList.do", {}, {
		get : {
			method : 'GET',
			cache : false,
			isArray : true
		}
	});
} ]);

services.factory('DataList', [ '$resource', function($resource) {
	return $resource("./data/dataList.do", {}, {
		get : {
			method : 'GET',
			cache : false,
			isArray : true
		}
	});
} ]);

services.factory('Data', [ '$resource', '$routeParams',
		function($resource, $routeParams) {
			return $resource("./data/data.do", {}, {
				get : {
					method : 'GET',
					cache : false,
					isArray : false
				},
				save : {
					method : 'POST',
					cache : false,
					isArray : false
				},
				update : {
					method : 'PUT',
					cache : false,
					isArray : false
				},
				del : {
					method : 'DELETE',
					cache : false,
					isArray : false
				}
			});
		} ]);

services.factory('PageParam',[function(){
	return {
		pageParam : {}
	}
}]);

services.factory('Login', [ '$resource', function($resource) {
	return $resource("./login.do", {}, {
		login : {
			method : 'POST',
			cache : false,
			isArray : false,
			headers : {'Content-Type' : 'application/json;charset=utf-8'}
		}
	});
} ]);
