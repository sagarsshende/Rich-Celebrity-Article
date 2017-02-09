
	app.controller('articleController',['$scope', 'DataService' , function($scope,DataService)  {

		init();

		function init(){
			 $scope.articleDetails = [];
				          
			 var promise =  DataService.articleData();
			 promise.then(
	         function(response) { 
	              	$scope.articleDetails = response.data;
	         },
	         function(errorPayload) {
	              //$log.error('failure loading data', errorPayload);
	         });
		}

		//Currency dropdown data
		$scope.currencies = [
	      {id:'US Dollar',value:'1',symbol:'$USD'},
	      {id:'Euro',value:'0.92',symbol:'&euro;'},
	      {id:'Australian Dollar',value:'0.78',symbol:'$AUD'}
	    ];
	    $scope.myCurrency = $scope.currencies[0]; 

		//OrderBy dropdown data
		$scope.orderBySorts = [
	      {id:'Rank',value:'rank'},
	      {id:'Name',value:'name'},
	      {id:'Age',value:'age'}
	    ];
	    $scope.myOrderSort = $scope.orderBySorts[0]; 
	}]);
