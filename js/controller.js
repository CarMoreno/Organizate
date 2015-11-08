angular.module("ToDoList", ["LocalStorageModule"])//usamos un modulo de un tercero
	.controller("ControllerToDoList", function($scope, localStorageService){
		//atributos
		if(localStorageService.get("my-todolist")){
			$scope.toDo = localStorageService.get("my-todolist")
		}
		else{
			$scope.toDo = []
		}
		$scope.nuevaTarea = {}
		$scope.date = new Date()
		/**
		 * {
		 * 		title: 'terminar el curso de angular',
		 * 		actividad: 'Hacer algo' 
		 * 		fecha: 'd-m-a, 3:00 pm'
		 * }
		 */
		//cada vez que hagamos un cambio en el $scope.toDo tenemos que setear el localStorageServices.
		//Para evitar duplicacion de codigo, podemos usar $watch, un metodo de Angular.
		//Como estamos usando un arreglo Angular nos provee de una funcion $watchCollection,
		// el cual recibe, el nombre de la collection y la funcion que se ejecutara cuando hayan cambios
		//en dicha collection
		$scope.$watchCollection('toDo', function() {
			localStorageService.set("my-todolist", $scope.toDo)
		})
		$scope.addTarea = function() {
			$scope.toDo.push($scope.nuevaTarea)
			console.log($scope.toDo)
			$scope.nuevaTarea = {}
			
		}
		$scope.clear = function(){
			$scope.toDo = []
		}
	})
