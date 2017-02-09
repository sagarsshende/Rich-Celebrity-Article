  app.service('DataService', function($http){
    
    var store = this;
    
    this.articleData = function(){
    
    	return $http.get('data/celebrityRichList.json')
    
    }
  });