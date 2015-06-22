angular.module('loanCalculator')
	.controller('MainCtrl', function($scope, bankService){

		bankService.getRate().then(function(data){
			$scope.interest_rate = data;
		});

		$scope.calculatePayment = function(){
			$scope.principal = Number($scope.principal);
			$scope.monthly_payment = Math.round(($scope.principal + ($scope.principal * $scope.interest_rate * 4)) / 48);
		};


})