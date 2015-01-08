'use strict';

angular.module('angularParse', [])

	.factory("parse",['$q', '$http', function($q, $http){

		var parseConfig = {
			appID: null,
			RESTKey: null,
			baseURI: 'https://api.parse.com/1'
		};

		var parseClient, ParseClient = function(parseConfig){
			this.appID = parseConfig.appID;
			this.RESTKey = parseConfig.RESTKey;
			this.baseURI = parseConfig.baseURI;
		};

		ParseClient.prototype.constructHeaders = function(){
			var PC = this;
			// construct headers with auth
			return {
				'X-Parse-Application-Id': 			PC.appID,
				'X-Parse-REST-API-Key': 				PC.RESTKey
			};
		};

		ParseClient.prototype.query = function(query, callback){
			var PC = this;
			// construct query for $http
			var req = {
				headers: PC.constructHeaders()
			};
			$http.get(PC.baseURI + '/classes/'+query, req)
				.success(function(data, status){
					callback('success', data);
				})
				.error(function(data, status){
					callback('error', data);
				})
				;
		};


		return {
			initialize: function(appID, RESTKey, baseURI){
				parseConfig.appID = appID;
				parseConfig.RESTKey = RESTKey;
				if(baseURI) parseConfig.baseURI = baseURI;
				parseClient = new ParseClient(parseConfig);
			},

			fetch: function(query){
				var deferred = $q.defer();

				// create callback
				var parseCallback = function(status, data){
					if(status === 'success')
						deferred.resolve(data);
						else
							deferred.reject('An error occured: '+data.toString());
				};

				parseClient.query(query, parseCallback);

				return deferred.promise;
			}

		}
	}]);

