//(function(){
var app = angular.module('articleStore',[]);
    
	 
	app.directive('articleList', function(){ 
	    return{
	      restrict:'E',
	      templateUrl:'views/article-list.html'
	    };
	});

	app.filter('unique', function() {
	   return function(collection, keyname) {
	      var output = [], 
	          keys = [];

	      angular.forEach(collection, function(item) {
	      	
	          var key = item[keyname];
	          
	          if(keys.indexOf(key) === -1) {
	              keys.push(key);
	              output.push(item);
	              
	          }
	      });

	      return output;
	   };
	});

