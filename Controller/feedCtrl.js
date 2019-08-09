test.controller("feedCtrl",["$scope","$state",function($scope, $state) {
    $scope.$on('$viewContentLoaded', function() {
    
    })
    
    $scope.Feedbk=function(feed)
    {
        debugger;
        $scope.email=feed.email;
        $scope.name=feed.name;
        $scope.phno=feed.phone;
        $scope.content=feed.content;
        localStorage.setItem("Email",$scope.email);
        localStorage.setItem("Name",$scope.name);
        localStorage.setItem("Phone Number",$scope.phno);
        localStorage.setItem("Content",$scope.content);
            alert("Thank You For Your Feedback");
            $state.go("Home");
        
    }
    }]);