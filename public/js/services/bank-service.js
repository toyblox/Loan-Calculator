var app = angular.module('loanCalculator');
app.service('bankService', function($http, $q) {

		this.getRate = function(){
			var dfd = $q.defer();
			$http({
				method: 'GET',
				url: 'http://localhost:8989/interest_rate'
			}).success(function(data) {
				console.log(data);
				dfd.resolve(data);
			})

			return dfd.promise;
		}

});
