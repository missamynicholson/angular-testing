toDoApp.service("ToDoService", ["ToDoFactory", "$http", function(ToDoFactory, $http) {

  this.getAll = function() {
    var url = "http://quiet-beach-24792.herokuapp.com/todos.json";
    return $http.get(url).then(_iterateThrough);
  };

  function _iterateThrough (response) {
    var todos = [];
    response.data.forEach(function(object) {
      todos.push(new ToDoFactory(object.text, object.completed));
    });
    return todos;
  }
}]);
