
app.controller('MainCtrl', function ($scope, $http) {
    $http.get('apartment.json').success(function(data) {
                    $scope.rents = data;
        });
    $scope.title = 'Find Your Next Home for Rent on RentApp'; 
    $scope.promo = 'Your Online Source for Rental Homes, Apartments and Houses for Rent!';

  $scope.plusOne = function(index) {
    $scope.rents[index].likes+= 1;
  };
  $scope.minusOne = function(index) {
    $scope.rents[index].dislikes+= 1;
  }

   
});

