(function(app){
	app.directive('tableDirective', tableDirective);

	function tableDirective(myData, $interval){
		return{
			restrict:'E',
			templateUrl:'directives/table-directive.html',
			scope:{

			},
			controller:function(){
				
			},  
			link:function($scope, element, attribute){
				var vm = this;
               $scope.list = [{
						name: 'Jon', 
						joining_date:'23/10/2015', 
						age: 23
						},
						{
						name:'Viki', 
						joining_date:'24/01/2015', 
						age: 20
						},
						{
						name: 'Abc', 
						joining_date:'25/10/2015', 
						age: 43
						},{
						name: 'XYZ', 
						joining_date:'28/10/2015', 
						age: 21
						}];
			
			    vm.iteration = 0;
			    $scope.sort = function(by){
                  $scope.list = myData.sortByAge($scope.list)
                  console.log($scope.list)
			    }
               
			    var stop = $interval(function() {
			      if(vm.iteration >=4){
			      	$interval.cancel(stop);
			      	stop ="undefined";
			      }else{
			      	$scope.list =myData.appendNew($scope.list, vm.iteration);
			      	vm.iteration++;			      	
			      }
			    }, 1000);



			}
		}
	}
})(App)