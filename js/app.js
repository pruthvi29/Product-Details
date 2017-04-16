var app = angular.module("product", []);
app
		.controller(
				"detailsController",
				function($scope, detailsService, $location, $anchorScroll) {
					$scope.products = detailsService.getProducts();
					$scope.isFinished = true;
					$scope.quantityAndDiscount = function(index, quantity) {
						if (quantity != null) {
							if (quantity > 4) {
								$scope.products[index].discount = 15;
								$scope.products[index].discountPrice = $scope.products[index].price
										* ($scope.products[index].discount / 100);
							} else {
								$scope.products[index].discountPrice = $scope.products[index].price
										* ($scope.products[index].discount / 100);
							}
							$scope.products[index].isNotEmpty = true;
						} else {
							$scope.products[index].isNotEmpty = false;
						}

					}
					$scope.gotoBottom = function() {
						$location.hash('bottom');
						$anchorScroll();
					};
					$scope.finish = function(product){
						$scope.finalProductDetails = product;
						$scope.isFinished = false;
					}
				});
app.service("detailsService", function() {
	var JSON = [ {
		"category" : "Baby Dress",
		"imagePath" : "./images/red_and_white.jpg",
		"price" : 120,
		"color" : "red and white",
		"isSize" : false,
		"isQuantity" : false,
		"isNotEmpty" : false,
		"isAddress" : false,
		"discountPrice" : 0,
		"discount" : 5
	}, {
		"category" : "Baby Dress",
		"imagePath" : "./images/blue_and_white.jpg",
		"price" : 150,
		"color" : "blue and white",
		"isSize" : false,
		"isQuantity" : false,
		"isNotEmpty" : false,
		"isAddress" : false,
		"discountPrice" : 0,
		"discount" : 5
	} ];
	return {
		getProducts : function() {
			return JSON;
		}
	}
});