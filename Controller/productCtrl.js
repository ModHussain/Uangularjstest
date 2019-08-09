test.controller('productCtrl', function($scope, $http) {
    $scope.listview=function(){
        $http.get('json/sampleData.json').then(function(response) {

            $scope.maindata = response.data;
            $scope.lgbrandname=$scope.maindata[0].BrandName;
            console.log($scope.lgbrandname);
            $scope.sambrandname=$scope.maindata[1].BrandName;
            console.log($scope.sambrandname);
            $scope.sonbrandname=$scope.maindata[2].BrandName;
            console.log($scope.sonbrandname);
            $scope.haibrandname=$scope.maindata[3].BrandName;
            console.log($scope.haibrandname);
            $scope.panbrandname=$scope.maindata[4].BrandName;
            console.log($scope.panbrandname);
            $scope.tobrandname=$scope.maindata[5].BrandName;
            console.log($scope.tobrandname);
            $scope.mibrandname=$scope.maindata[6].BrandName;
            console.log($scope.mibrandname);


            
            $scope.lgproduct=$scope.maindata[0].BrandProducts;
            console.log($scope.lgproduct);
            $scope.samproduct=$scope.maindata[1].BrandProducts;
            console.log($scope.lgproduct);
            $scope.sonyproduct=$scope.maindata[2].BrandProducts;
            console.log($scope.sonyproduct);
            $scope.haiproduct=$scope.maindata[3].BrandProducts;
            console.log($scope.haiproduct);
            $scope.panproduct=$scope.maindata[4].BrandProducts;
            console.log($scope.panproduct);
            $scope.tosproduct=$scope.maindata[5].BrandProducts;
            console.log($scope.tosproduct);
            $scope.miproduct=$scope.maindata[6].BrandProducts;
            console.log($scope.miproduct);

            console.log($scope.maindata);
          });
    }
 
  });