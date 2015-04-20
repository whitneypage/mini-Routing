var app = angular.module('miniRouting');

app.controller('productsCtrl', function($scope, $routeParams, productsService) {
	if($routeParams.id === 'shoes'){
		$scope.productData = productsService.shoeData;
	} else if ($routeParams.id === 'socks'){
		$scope.productData = productsService.sockData;
	}

})