'use strict';

angular.module('ebo')
	.factory('parseService', ['parse', function(parse){
		parse.initialize('1023fIXR5tCkVdTAhKKR3CbrYS8uYhsBR1igaF3q', 'uZwYC7VGsp4DsRENhdc0FOSCcpZ883ceWTbvjIDT');

		return {
			fetch: function(query){
				return parse.fetch(query);
			}
		}

	}]);
