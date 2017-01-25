(function(app){
    app.factory('myData', function(){

    	function sortByAge(obj){
          return obj.sort(function(a, b){
             return (a.joining_date < b.joining_date) ? -1 : (a.joining_date > b.joining_date)?1:0;
          });

        }

        function appendNew(obj, flag){
        	var object =  angular.copy(obj)[flag];
                var age = object.age.toString().split('').reverse().join('');
                var doj = object.joining_date.split('/');
                doj[0] = (parseInt(doj[0])+1).toString();
                object.age= age;
                object.joining_date = doj.join('/');
                      	   
        	obj.push(object);
          return obj;
        }

	     return {
	        sortByAge : sortByAge,
	        appendNew : appendNew
	     }
	 });
})(App)