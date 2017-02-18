// Define a new module for our app
var app = angular.module("instantSearch", []);

// // Create the instant search filter
//
// app.filter('searchFor', function(){
//   console.log('test');
//
// 	return function(arr, searchString){
//
//     // if search form is empty display all data
// 		if(!searchString){
// 			return arr;
// 		}
//
// 		var result = [];
//
//     // To enable non-sensitive case
// 		searchString = searchString.toLowerCase();
//
// 		// Using the forEach helper method to loop through the array
// 		angular.forEach(arr, function(item){
//
//       // if there's a matched item push display
// 			if(item.title.toLowerCase().indexOf(searchString) !== -1){
// 				result.push(item);
// 			}
//
// 		});
//
// 		return result;
// 	};
//
// });


app.controller("instantSearchCtrl", function($scope, $http) {
    $scope.items = [{
        url: 'http://www.tutorialspoint.com/android/',
        title: 'Android tutorials',
        image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
    }, {
        url: 'http://www.tutorialspoint.com/angularjs/',
        title: 'AngularJs Tutorials ',
        image: 'http://www.tutorialspoint.com/angularjs/images/angularjs-mini-logo.jpg'
    }, {
        url: 'http://www.tutorialspoint.com/html5/',
        title: 'HTML5 Tutorials',
        image: 'http://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg'
    }, {
        url: 'http://www.tutorialspoint.com/css/',
        title: 'CSS Tutorials',
        image: 'http://www.tutorialspoint.com/css/images/css-mini-logo.jpg'
    }, {
        url: 'http://www.tutorialspoint.com/java/',
        title: 'Java Tutorials',
        image: 'http://www.tutorialspoint.com/java/images/java-mini-logo.jpg'
    }, {
        url: 'http://www.tutorialspoint.com/joomla/',
        title: 'Joomla Tutorials',
        image: 'http://www.tutorialspoint.com/joomla/images/joomla-mini-logo.jpg'
    }, {
        url: 'http://www.tutorialspoint.com/html/',
        title: 'HTML Tutorials ',
        image: 'http://www.tutorialspoint.com/html/images/html-mini-logo.jpg'
    }];

    $scope.regions = [];
    $http.get("../json/regions.json")
    .then(function(response) {
        $scope.regions = response.data;
        console.log($scope.regions);
    });

    $scope.programs = [
      {name: "Senior High School", value: "SE"},
      {name: "College", value: "CO"},
      {name: "Graduate Studies", value: "GS"},
      {name: "Tech-Voc Center", value: "TV"},
      {name: "Learning Center", value: "LC"}
    ];

    $scope.search = function(){
      console.log($scope.searchString);
      console.log($scope.regionValue);
      console.log($scope.schoolType);
    };
});
