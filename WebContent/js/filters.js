'use strict';

var filters = angular.module('filters', []);

filters.filter('removeId', function() {
    return function (data) {
    	for(var i = 0;i<data.length;i++){
    		var temp = data[i];
    		delete temp._id;
    	}
        return data;
      };
    });

